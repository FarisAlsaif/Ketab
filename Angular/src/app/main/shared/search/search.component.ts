import { Component, Input, OnInit } from '@angular/core';
import { book } from '../types';
import { SearchService } from 'src/app/services/search/search.service';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements  OnInit{
  query:string=' ';

 @Output() bookResearchResultEmitter =  new EventEmitter<book[]>

  constructor(
    private searchService: SearchService,
    ) { }

  ngOnInit(): void {
    

  }
  search(value:string){
    console.log("in search")
    this.bookResearchResultEmitter.emit(this.searchService.getBooks(value));
  }
  
} 