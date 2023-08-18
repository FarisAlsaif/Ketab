import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { book } from '../types';
import { SearchService } from 'src/app/services/search/search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements  OnInit{
  query:string='il';
  books: book[] = [];

  constructor(
    private searchService: SearchService,
    ) { }

  ngOnInit(): void {
    

  }
  search(){
    this.books = this.searchService.getBooks(this.query);

  }
  
} 