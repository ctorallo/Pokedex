import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-navigator',
  templateUrl: './list-navigator.component.html',
  styleUrls: ['./list-navigator.component.css']
})

export class ListNavigatorComponent implements OnInit {
  limiter : number;
  constructor(private pService: PokeapiService,private router: Router) { }

  setOutputLimit() {
    console.log("setOutputLimit() is pressed");
    if (!this.limiter) {
      return;
    }

   this.pService.setPageLimit(this.limiter);

    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
