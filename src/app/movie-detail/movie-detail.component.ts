import { Component, OnInit, Input } from '@angular/core';
import { MovieAPIService } from '../movie-api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  constructor(public movieApi: MovieAPIService) { }
  
  @Input() movie;
  
  ngOnInit(): void {
    // this.movieApi.selectedMovie;
  }

}
