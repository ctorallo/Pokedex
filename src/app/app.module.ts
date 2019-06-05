import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokeapiService } from './pokeapi.service';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonImgComponent } from './pokemon-list/pokemon-img/pokemon-img.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonImgComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PokeapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
