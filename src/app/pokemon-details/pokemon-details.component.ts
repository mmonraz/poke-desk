import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { PokemonDetailsResponse } from '../interfaces/pokemon.interfaces';

@Component({
  selector: 'app-pokemon-details',
  providers: [PokemonService],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent implements OnChanges {
  @Input()
  pokemonName?: string;

  private _pokemonDetails?: PokemonDetailsResponse;

  @Output()
  public onBackToListEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor(private pokemonService: PokemonService){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.pokemonService.getPokemonByName(this.pokemonName?.toLowerCase() || '')
      .subscribe(response => {
        this._pokemonDetails = response;
        console.log("pokemon details: ", this._pokemonDetails);
      })
  }

  get pokemon(): PokemonDetailsResponse | undefined {
    return this._pokemonDetails;
  }

  backToList(){
    this.onBackToListEmitter.emit(false);
  }

}
