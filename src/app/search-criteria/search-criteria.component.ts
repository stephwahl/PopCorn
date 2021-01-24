import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
@Input() post: any
  constructor() { }

  ngOnInit(): void {
  }

}
