import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../pokeapi.service';
import { SpriteUrls, PokemonInfo, PokemonType, TypesArray } from '../models/detailModel';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-detail-box',
  templateUrl: './detail-box.component.html',
  styleUrls: ['./detail-box.component.css']
})
export class DetailBoxComponent implements OnInit {
  detailInfo: string;
  pokemonInfoSprites$: SpriteUrls;
  pokemonInfo$: PokemonInfo;
  typesArray$: TypesArray[];
  pokedexDesc : string;
  venusaurTest = 'venusaur';
  constructor(
    private route: ActivatedRoute,
    private pService: PokeapiService,
    private router: Router) {

    // this.router.events.subscribe((e: any) => {
    //   console.log('Router event:', e);
    // });

  }

  goto(path) {
    this.router.navigate([path]);
  }

  goback() {
    this.router.navigate(["../"]);
  }

  fillUpDetails(info) {
    console.log("refreshInfo CLICKED");
    this.pService.getPokemonInfo(info)
      .subscribe(data => {
        this.pokemonInfoSprites$ = data.sprites;
        this.pokemonInfo$ = data;
        this.typesArray$ = data.types;
        this.typesArray$.reverse;
      });

    this.pService.getPokedexDesc(info)
      .subscribe(data => {
        this.pokedexDesc = data.flavor_text_entries[1].flavor_text
      });
  }

  ngOnInit() {
    this.detailInfo = this.route.snapshot.paramMap.get('details');
    console.log("Detail Info: " + this.detailInfo);
    this.fillUpDetails(this.detailInfo);
  }


}