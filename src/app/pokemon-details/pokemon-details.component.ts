import { Component, inject } from '@angular/core';
import { DecimeterPipe } from '../pipes/decimeter.pipe';
import { HectogramPipe } from '../pipes/hectogram.pipe';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../model/Pokemon';
import { PokemonDetailsResponse } from '../interfaces/pokemon.interfaces';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [DecimeterPipe, HectogramPipe, CommonModule],
  providers: [PokemonService],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent {
  pokemonName:  string;
  pokemon: PokemonDetailsResponse;
  route: ActivatedRoute = inject(ActivatedRoute);
 
  constructor(private pokemonService:PokemonService){
    this.pokemonName = this.route.snapshot.params['name'];
    pokemonService.getPokemonByName(this.pokemonName).subscribe(response => {
       this.pokemon = response
    });
  }
}
