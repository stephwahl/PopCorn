import { Component, OnInit } from '@angular/core';
import { MovieAPIService} from '../movie-api.service';

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css']
})
export class WatchlistPageComponent implements OnInit {

  constructor(public movieApi : MovieAPIService) { }

  ngOnInit(): void {
  }

}
