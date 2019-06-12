import { Component, OnInit, Input } from '@angular/core';
import { Results } from 'src/app/pokemonModelQuery';
import { PokeapiService } from 'src/app/pokeapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-box-result',
  templateUrl: './box-result.component.html',
  styleUrls: ['./box-result.component.css']
})
export class BoxResultComponent implements OnInit {
  @Input('pokemonUrl') pokemonUrl : string;
  @Input('pokemonName') pokemonName : string;

  
  constructor(private router: Router){}
  
  goto(path) {
    this.router.navigate(["./list/" + path]);
  }

  ngOnInit(){
  }
}
