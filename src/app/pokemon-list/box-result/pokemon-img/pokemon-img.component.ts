import { Component, OnInit, Input } from '@angular/core';
import { spriteUrls } from 'src/app/infoQueryModel';
import { PokeapiService } from '../../../pokeapi.service';

@Component({
  selector: 'app-pokemon-img',
  templateUrl: './pokemon-img.component.html',
  styleUrls: ['./pokemon-img.component.css']
})
export class PokemonImgComponent implements OnInit {
  @Input('pokemonUrl') pokemonUrl : string;

  pokemonSprites$: spriteUrls;

  constructor(private pService: PokeapiService){}
  

  ngOnInit(){
    this.pService.getPokemonInfo(this.pokemonUrl)
      .subscribe(data => {
        console.log(data.sprites.front_default);
        this.pokemonSprites$ = data.sprites;
      })
      console.log(this.pokemonUrl);

  }
    
}
