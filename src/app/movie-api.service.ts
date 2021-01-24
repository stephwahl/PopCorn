import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface MoviePost {
  title: string;
  tagline: string;
  poster_path: string;
}

@Injectable({
  providedIn: 'root'
})

export class MovieAPIService {
  movies: MoviePost[] = [];
  constructor(private http: HttpClient) { }

  getMovies(year?: number) {
    let url = "https://api.themoviedb.org/3/discover/movie?api_key=110c1c3ee92dd118bc4a96828993158a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    if (year) {
    url += `&year=${year}`
    }
  }

  getTopFive() {
    let url = "https://api.themoviedb.org/3/discover/movie?api_key=110c1c3ee92dd118bc4a96828993158a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    this.http.get(url).subscribe(
      (resp:any) => { 
      console.log("Apple");    
      this.movies = resp.results
    },
    (error) => {
      console.log(error);
    }
)
  }
}
