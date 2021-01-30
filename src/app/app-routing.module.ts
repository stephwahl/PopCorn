import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';

const routes: Routes = [
 // blank path to Home Search Criteria Component 
  {path: '', component: SearchCriteriaComponent},
  {path: 'movie-detail', component: MovieDetailComponent},
  {path: 'watchlist-page', component: WatchlistPageComponent},
  {path: 'movie-list', component: MovieListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
