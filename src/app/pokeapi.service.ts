import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pokemonQuery } from './pokemonModelQuery';
import { pokemonInfo } from './infoQueryModel';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  pokemonInfoUrl : string;

  constructor(private http:HttpClient) { }

  getPokemonList(){
    return this.http.get<pokemonQuery>(this.pokeApiUrl);
  }

  getPokemonInfo(url : string){
    return this.http.get<pokemonInfo>(url);
  }
}

