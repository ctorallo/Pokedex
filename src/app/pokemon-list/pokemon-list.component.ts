import { Component, OnInit } from '@angular/core';
import { Results } from '../models/pageListModel';
import { PokeapiService } from '../pokeapi.service';
import { Router } from '@angular/router';
import { NumberValueAccessor } from '@angular/forms/src/directives';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons$: Results[];
  totalPageNumbers : number;
  offSet : number;
  pages = new Array;

  constructor(private pService: PokeapiService,
    private router: Router) {

    // this.router.events.subscribe((e: any) => {
    //   console.log('Router event:', e);
    // });
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  generatePages(){

    for (let i = 1; i <= this.totalPageNumbers; i++) {
      // this.pages.push(1);
      console.log("i : " + i);
      this.pages.push(i);
    }
    this.pages.reverse();
  }


  turnPage(page: number){
    if(!(((page-1) * this.pService.limit ) == this.offSet)){
      this.pService.setOffset((page-1) * this.pService.limit);
      this.router.navigate(['']);
    }
    
  }

  ngOnInit() {
    this.pService.getPokemonList()
      .subscribe(data => this.pokemons$ = data.results);
    
    this.totalPageNumbers = Math.ceil( 807 / this.pService.limit)  ;
    this.offSet = this.pService.offset;
    console.log("totalpageNumbers: " + this.totalPageNumbers);

    this.generatePages();
  }

}
