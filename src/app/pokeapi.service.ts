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
  offset = 0;
  limit = 20;
  _pokeApiOffsetAndLimitUrl = 'https://pokeapi.co/api/v2/pokemon/';
constructor(private http: HttpClient) { }

private constructURL(){
  this._pokeApiOffsetAndLimitUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=' + this.offset + '&limit=' + this.limit;
}

setPageLimit(limit : number){
  this.limit = limit;
  this.constructURL();
}

setOffset(offset : number){
  this.offset = offset;
  this.constructURL();
}

getPokemonList(){
  return this.http.get<PokemonQuery>(this._pokeApiOffsetAndLimitUrl);
}

getPokemonInfo(name : string){
  return this.http.get<PokemonInfo>(this._pokeApiUrl + name);
}

getPokedexDesc(name : string){
  console.log("getPokedexDesc value: " + this._pokemonSpeciesUrl + name)
  return this.http.get<Species>(this._pokemonSpeciesUrl + name);
}

}

