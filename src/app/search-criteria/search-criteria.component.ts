import { Component, OnInit, Input } from '@angular/core';
import { MovieAPIService } from '../movie-api.service';

interface MoviePost {
  title: string;
  tagline: string;
  poster_path: string;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  constructor(public movieApi: MovieAPIService) { }
  public selected: any;
  public favorites: any;
  public movies: any;
  public year: number;
  public title: string;
  public rating: number;

  ngOnInit(): void {
    this.movieApi.getTopFive();
  }
  selectedMovie(movie: MoviePost) {
    this.selected = movie;
  }
  favorite(movie: MoviePost) {
    // console.log(movie);
    this.movieApi.favorites.push(movie);
    // console.log(this.movieApi.favorites);
  }

  // getSearchResults() {
  //   this.movieApi.getSearchResults(this.year);
  // }

}
