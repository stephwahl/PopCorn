import { Component, OnInit } from '@angular/core';
import { MovieAPIService } from '../movie-api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(public movieAPI:MovieAPIService) { }

  ngOnInit(): void {
//   this.movieAPI.getMovies();
  }

}
