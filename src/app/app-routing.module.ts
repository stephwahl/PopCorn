import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';

const routes: Routes = [
  // blank path is the default or home
  {path: '', component: SearchCriteriaComponent},
  {path: 'movie-list', component: MovieListComponent},
  {path: 'watchlist-page', component: WatchlistPageComponent},
  {path: 'movie-detail', component: MovieDetailComponent},
  // wildcard
  // {path: '**', component: PagenotfoundComponent} 
  // order matters, wildcard catchalls need to be last, more specific to least specific
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
