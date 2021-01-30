import { Component, OnInit, Input } from '@angular/core';
import { MovieAPIService } from '../movie-api.service';
// import { MoviePost } from '../movie-post';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})

export class SearchCriteriaComponent implements OnInit {
  constructor(public movieApi: MovieAPIService) { }
  public rating : any;
  public title : string;
  public year: number;
  
  ngOnInit(): void {
    this.movieApi.getTopFive();
  }
}
