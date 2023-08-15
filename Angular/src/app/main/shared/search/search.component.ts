import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { book } from '../types';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements  OnInit{
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  let query = this.route.snapshot.paramMap.get('query');
  console.warn(query);


  }
  @Input() books: book[] = [];

} 