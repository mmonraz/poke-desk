import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PokemonDetailsResponse, PokemonListResponse } from '../interfaces/pokemon.interfaces';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class PokemonService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { 
  }

  getAllPokemons(): Observable<PokemonListResponse> {
    const params = new HttpParams()
      .set('limit', 10)
    return this.http.get<PokemonListResponse>(`${this.baseUrl}pokemon`, { params });
  }

  getPokemonByName(name:string):Observable<PokemonDetailsResponse> {
    return this.http.get<PokemonDetailsResponse>(`${this.baseUrl}pokemon/${name}`)

  }
}
