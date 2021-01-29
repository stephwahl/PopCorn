import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

/*interface Response {
  results: MoviePost[];
  page: number;
}
*/

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

@Injectable({
  providedIn: 'root'
})

export class MovieAPIService {
  apiKey = "110c1c3ee92dd118bc4a96828993158a";
  url = "https://api.themoviedb.org/3/discover/movie";
  movies: MoviePost[];
  favorites: MoviePost[] = [];
  search: MoviePost[] = [];
  // title: MoviePost[] = []; 
  
  constructor(private http: HttpClient) { }

  getMovies(year?: number, title?: string, rating?: number) {
    // let url = "https://api.themoviedb.org/3/discover/movie?api_key=110c1c3ee92dd118bc4a96828993158a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    let url = "https://api.themoviedb.org/3/search/movie?api_key=110c1c3ee92dd118bc4a96828993158a&language=en-US&page=1&include_adult=false"
    
    if (year) {
    url += `&year=${year}`}

    if(title) {
      url += `&query=${title}`}

    if(rating) {
      url += `&vote_average.gte=${rating}`}
        
    this.http.get(url).subscribe(
      (resp:any) => {
        this.search = resp.results
      }
    )
    }

  getTopFive() {
    let url = "https://api.themoviedb.org/3/discover/movie?api_key=110c1c3ee92dd118bc4a96828993158a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    this.http.get(url).subscribe(
      (resp:any) => {    
      this.movies = resp.results
      this.movies = this.movies.slice(0, 5);
    },
    (error) => {
      console.log(error);
    }
)
  }
}
