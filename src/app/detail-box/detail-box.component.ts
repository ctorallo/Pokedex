import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../pokeapi.service';
import { SpriteUrls, PokemonInfo, PokemonType, TypesArray } from '../models/detailModel';
import { Router, NavigationEnd } from '@angular/router';
import { Species } from '../models/pokemon-species-model';
import { EvolutionChain } from '../models/evolution-chain-model';

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
  pokedexDesc: Species;
  pokemonEvoChain$ : EvolutionChain;
  venusaurTest = 'mewtwo';
  imageSrc: string;
  isFront = true;
  isMale = true;
  isShiny = false;

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

  goto(path) {
    this.router.navigate([path]);
  }

  goback() {
    this.router.navigate(["../"]);
  }

  changeImage(isFront: boolean, isShiny: boolean, isMale: boolean) {
    this.imageSrc = this.pokemonInfoSprites$.front_default;
    if (!isShiny) {

      if (isMale) {
        if (isFront) { this.imageSrc = this.pokemonInfoSprites$.front_default }
        else { this.imageSrc = this.pokemonInfoSprites$.back_default }
      } else {
        if (isFront) { this.imageSrc = this.pokemonInfoSprites$.front_female }
        else { this.imageSrc = this.pokemonInfoSprites$.back_female }
      }

    } else {

      if (isMale) {
        if (isFront) { this.imageSrc = this.pokemonInfoSprites$.front_shiny }
        else { this.imageSrc = this.pokemonInfoSprites$.back_shiny }
      } else {
        if (isFront) { this.imageSrc = this.pokemonInfoSprites$.front_shiny_female }
        else { this.imageSrc = this.pokemonInfoSprites$.back_shiny_female }
      }
    }

    // return this.imageSrc;
  }

  changeImgGender(isMale : boolean){
    this.isMale = isMale;
    this.changeImage(this.isFront, this.isShiny , this.isMale);
  };

  changeImgFacing(isFront : boolean){
    this.isFront = isFront;
    this.changeImage(this.isFront, this.isShiny , this.isMale);
  }

  changeImgToShiny(isShiny : boolean){
    this.isShiny = isShiny;
    this.changeImage(this.isFront, this.isShiny , this.isMale);
  }

  ngOnInit() {
    this.detailInfo = this.route.snapshot.paramMap.get('details');
    console.log("Detail Info: " + this.detailInfo);

    this.pService.getPokemonInfo(this.detailInfo)
      .subscribe(data => {
        this.pokemonInfoSprites$ = data.sprites;
        this.changeImage(true,false,true);
        this.pokemonInfo$ = data;
        this.typesArray$ = data.types;
        this.typesArray$.reverse;
      });

    this.pService.getPokedexDesc(this.detailInfo)
      .subscribe(data => {
        this.pokedexDesc = data;
        // data.flavor_text_entries[1].flavor_text
        console.log("this.pokedexDesc.evolution_chain.url: " + this.pokedexDesc.evolution_chain.url);
      });
  }


}