import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Pokemon } from '../model/Pokemon';

@Component({
  selector: 'pokemon-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;

  constructor(private router: Router) {

  }

  showPokemonDetails() {
    this.router.navigateByUrl(`/pokemons/${this.pokemon.name}`);
  }
}
