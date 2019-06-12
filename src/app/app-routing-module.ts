import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { DetailBoxComponent } from './detail-box/detail-box.component';
import { AppGuard } from './app.guard';

const routes: Routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'list', component: PokemonListComponent },
    { path: 'list/:details', component: DetailBoxComponent },
    { path: '**', redirectTo: ':list' }
    
    
    // { path: ':details', component: DetailBoxComponent,
    //           canActivate: [AppGuard], runGuardsAndResolvers: 'always'},
    // { path: '**', redirectTo: ':details' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload',enableTracing: false})],
  exports: [RouterModule],
})
export class AppRoutingModule { }