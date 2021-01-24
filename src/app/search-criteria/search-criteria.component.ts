import { Component, OnInit, Input } from '@angular/core';
import { MovieAPIService } from '../movie-api.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  constructor(public movieApi: MovieAPIService) { }

  ngOnInit(): void {
    console.log("Hi there");
    this.movieApi.getTopFive();
  }

}
