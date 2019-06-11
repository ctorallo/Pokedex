import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../pokeapi.service';
import { spriteUrls } from '../infoQueryModel';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-detail-box',
  templateUrl: './detail-box.component.html',
  styleUrls: ['./detail-box.component.css']
})
export class DetailBoxComponent implements OnInit {
  detailInfo : string;
  pokemonInfo$: spriteUrls;

  constructor(
    private route: ActivatedRoute,
    private pService: PokeapiService,
    private router: Router) { 

      this.router.events.subscribe((e: any) => {
        console.log('Router event:', e);
      });

    }

    goto(path) {
      this.router.navigate([path]);
    }
  

  ngOnInit() {
    this.detailInfo = this.route.snapshot.paramMap.get('details');

    console.log("Detail Info: " + this.detailInfo);

    this.pService.getPokemonImage(this.detailInfo)
      .subscribe(data => this.pokemonInfo$ = data.sprites);
  }

}