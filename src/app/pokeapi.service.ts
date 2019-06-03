import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonModel } from './pokemonModel';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http:HttpClient) { }

  getPokemonList(){
    return this.http.get<PokemonModel>(this.pokeApiUrl);
  }
}
