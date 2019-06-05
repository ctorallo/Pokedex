import { Component, OnInit } from '@angular/core';
import { pokemonQuery, Results } from './pokemonModelQuery';
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
