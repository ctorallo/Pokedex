import { Component, OnInit } from '@angular/core';
import { PokemonModel, Results } from '../pokemonModel';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons$: Results[];

  constructor(private pService: PokeapiService){}

  ngOnInit(){
    this.pService.getPokemonList()
      .subscribe(data => this.pokemons$ = data.results);
  }
}
