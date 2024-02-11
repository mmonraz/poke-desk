import { Component, inject } from '@angular/core';
import { DecimeterPipe } from '../pipes/decimeter.pipe';
import { HectogramPipe } from '../pipes/hectogram.pipe';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../model/Pokemon';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [DecimeterPipe, HectogramPipe, CommonModule],
  providers: [PokemonService],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent {
  pokemonId:  number;
  pokemon: Pokemon;
  route: ActivatedRoute = inject(ActivatedRoute);
 
  constructor(private pokemonService:PokemonService){
    this.pokemonId = Number(this.route.snapshot.params['id']);
    this.pokemon = pokemonService.getPokemonById(this.pokemonId);
  }
}
