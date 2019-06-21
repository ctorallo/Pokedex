import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeapiService } from 'src/app/pokeapi.service';
import { EvolutionChain, ChainObject } from 'src/app/models/evolution-chain-model';

@Component({
  selector: 'app-evolution-chain',
  templateUrl: './evolution-chain.component.html',
  styleUrls: ['./evolution-chain.component.css']
})
export class EvolutionChainComponent implements OnInit {
  @Input('pokemonEvoChainUrl') pokemonEvoChainUrl : string;
  
  pokemonEvolutions$ : EvolutionChain;
  pokemonArray = new Array;

  constructor(
    private route: ActivatedRoute,
    private pService: PokeapiService,
    private router: Router) {

    // this.router.events.subscribe((e: any) => {
    //   console.log('Router event:', e);
    // });
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  getEvolution(chainObject : ChainObject){
    chainObject.evolves_to
    
  }

  ngOnInit() {
    this.pService.getPokemonEvolutionChain(this.pokemonEvoChainUrl)
      .subscribe(data => {
          this.pokemonEvolutions$ = data;
          this.pokemonArray.push([data.species.name, null]);
          console.log("this.pokemonEvolutions$.species : " + this.pokemonEvolutions$.species);
      });
  }

}
