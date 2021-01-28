import { Component, OnInit, Input} from '@angular/core';
import { MovieAPIService } from '../movie-api.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
@Input() movie;

  constructor(public movieApi: MovieAPIService) { }

  ngOnInit(): void {
    this.movieApi.getMovies();
  }

}
