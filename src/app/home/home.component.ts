import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../interfaces/pokemon.interfaces';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

export class HomeComponent implements OnInit {
  private _pokemons: Pokemon[] = [];
  private _pokemonBk: Pokemon[] = [];

  constructor( private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons
    .toPromise()
    .then( response => {
      this._pokemons = response?.results || [];
      this._pokemonBk = this._pokemons;
      console.log({pokemons: this._pokemons});
    });
  }

  filterPokemons(query: string){
    if(query.length === 0){
      this._pokemons = this._pokemonBk;
      return;
    }

    this._pokemons = this._pokemons.filter(pokemon => pokemon.name === query);
  }

  get pokemons(): Pokemon[]{
    return this._pokemons;
  }

}
