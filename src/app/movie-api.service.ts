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

/*
    this.http.get(url).subscribe(
      (resp: any) => {
        const posts = resp.data.children;
        for (let post of posts) {
          const redditPost : RedditPost = {
            title: post.data.title,
            link: "https://reddit.com" + post.data.permalink,
            image: post.data.thumbnail
          };
          this.posts.push(redditPost);
        }
        console.log(this.posts);
} 
*/