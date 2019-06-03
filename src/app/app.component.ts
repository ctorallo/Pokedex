import { Component, OnInit } from '@angular/core';
import { PokemonModel, Results } from './pokemonModel';
import { PokeapiService } from './pokeapi.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Pokedex';
  

  constructor() { }

  ngOnInit() {
  }

}
