import { Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

export const routes: Routes = [
    {path: 'pokemons', component: PokemonListComponent },
    {path: 'pokemons/:id', component: PokemonDetailsComponent},
    {path: '', redirectTo: '/pokemons', pathMatch: 'full' }
];
