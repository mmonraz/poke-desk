import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../interfaces/pokemon.interfaces';

@Component({
  selector: 'app-home',
  standalone: false,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  private _pokemons: Pokemon[] = [];
  private _pokemonBk: Pokemon[] = [];

  constructor( private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons( response => {
      this._pokemons = response?.results || [];
      this._pokemonBk = this._pokemons;
      console.log({pokemons: this._pokemons});
    });
  }

  get pokemons(): Pokemon[]{
    return this._pokemons;
  }

}
