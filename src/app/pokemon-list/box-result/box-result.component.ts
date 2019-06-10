import { Component, OnInit, Input } from '@angular/core';
import { Results } from 'src/app/pokemonModelQuery';
import { PokeapiService } from 'src/app/pokeapi.service';

@Component({
  selector: 'app-box-result',
  templateUrl: './box-result.component.html',
  styleUrls: ['./box-result.component.css']
})
export class BoxResultComponent implements OnInit {
  @Input('pokemonUrl') pokemonUrl : string;
  @Input('pokemonName') pokemonName : string;

  
  constructor(){}
  
  ngOnInit(){
    console.log(this.pokemonUrl);
    console.log(this.pokemonName);
  }
}
