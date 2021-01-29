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
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() movie;
  public favorites: any;

  constructor(public movieApi:MovieAPIService) { }

  favorite(movie: MoviePost) {
    console.log(movie);
    this.movieApi.favorites.push(movie);
    console.log(this.movieApi.favorites);
  }

  ngOnInit(): void {
    this.movieApi.getMovies();
  }

}
