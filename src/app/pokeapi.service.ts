import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonQuery } from './models/pageListModel';
import { PokemonInfo } from './models/detailModel';
import { Species } from './models/pokemon-species-model';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  _pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  _pokemonSpeciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/';
  pokemonInfoUrl : string;

  constructor(private http:HttpClient) { }

  getPokemonList(){
    return this.http.get<PokemonQuery>(this._pokeApiUrl);
  }

  getPokemonInfo(name : string){
    return this.http.get<PokemonInfo>(this._pokeApiUrl + name);
  }

  getPokedexDesc(name : string){
    console.log("getPokedexDesc value: " + this._pokemonSpeciesUrl + name)
    return this.http.get<Species>(this._pokemonSpeciesUrl + name);
  }
}

