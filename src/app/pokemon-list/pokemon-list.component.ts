import { Component } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../model/Pokemon';
import { PokemonListResponse } from '../interfaces/pokemon.interfaces';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonCardComponent, CommonModule],
  providers: [PokemonService],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  @Input()
  public pokemons: Pokemon[] = [];

  private _shouldShowDetails: boolean = false;
  public pokemonName: string = "";

  get shouldShowDetails(): boolean {
    return this._shouldShowDetails;
  }

  showDetails(name: string){
    this._shouldShowDetails = true;
    this.pokemonName = name;
  }

  onBackToList(showDetails: boolean){
    this._shouldShowDetails = showDetails;
  }
}
