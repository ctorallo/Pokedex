import { Component, OnInit, Input } from '@angular/core';
import { Results } from 'src/app/models/pageListModel';
import { PokeapiService } from 'src/app/pokeapi.service';
import { Router } from '@angular/router';
import { SpriteUrls, TypesArray } from 'src/app/models/detailModel';

@Component({
  selector: 'app-box-result',
  templateUrl: './box-result.component.html',
  styleUrls: ['./box-result.component.css']
})
export class BoxResultComponent implements OnInit {
  @Input('pokemonUrl') pokemonUrl : string;
  @Input('pokemonName') pokemonName : string;

  pokemonSprites$ : SpriteUrls;
  typesArray$: TypesArray[];
  pNumber$: number;
  constructor(private router: Router,private pService: PokeapiService){}
  
  goto(path) {
    this.router.navigate(["./list/" + path]);
  }

  ngOnInit(){

    this.pService.getPokemonInfo(this.pokemonName)
      .subscribe(data => {
        // console.log(data.sprites.front_default);
        this.pNumber$ = data.id;
        this.pokemonSprites$ = data.sprites;
        this.typesArray$ = data.types;
        this.typesArray$.reverse;
      })
  }
}
