import { Component, OnInit, Input } from '@angular/core';
import { MovieAPIService } from '../movie-api.service';
import { MoviePost } from '../movie-post';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  constructor(public movieApi:MovieAPIService) { }

  @Input() movie;

  ngOnInit(): void {
    this.movieApi.getMovies();
  }

}
