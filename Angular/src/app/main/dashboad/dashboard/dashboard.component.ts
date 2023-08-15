import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header/header.service';
import { BooksService } from 'src/app/services/books/books.service';
import { book } from '../../shared/types';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy, OnInit {

  
  books:book[] = [];

  constructor(
    private headerService: HeaderService,
    private booksService: BooksService,
    ) { }

  ngOnInit(): void {
    this.headerService.setHeader({
      title: 'Books',
      back: true,
    });
    this.books = this.booksService.getBooks();

  }
  ngOnDestroy(): void {
    this.headerService.resetHeader();
  }
}
