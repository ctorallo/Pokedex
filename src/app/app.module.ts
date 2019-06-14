import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokeapiService } from './pokeapi.service';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { BoxResultComponent } from './pokemon-list/box-result/box-result.component';
import { ListNavigatorComponent } from './list-navigator/list-navigator.component';
import { DetailBoxComponent } from './detail-box/detail-box.component';
import { AppRoutingModule } from './app-routing-module';
import { AppGuard } from './app.guard';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    BoxResultComponent,
    ListNavigatorComponent,
    DetailBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PokeapiService, AppGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
