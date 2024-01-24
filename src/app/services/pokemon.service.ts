import { Injectable } from '@angular/core';
import { Pokemon } from '../model/Pokemon';
import pokemonData from '../../assets/pokemons.json';

@Injectable()
export class PokemonService {
  private pokemons:Pokemon[] = [];

  constructor() { 
    this.pokemons = pokemonData;
  }

  getAllPokemons() {
    return this.pokemons;
  }

  getPokemonById(id:number):Pokemon {
    return this.pokemons.filter(pokemon => pokemon.id === id)[0];
  }
}
