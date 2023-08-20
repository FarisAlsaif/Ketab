import { Component } from '@angular/core';
import { BooksService } from 'src/app/main/shared/services/books/books.service';
import { HeaderService } from 'src/app/main/shared/services/header/header.service';
import { book } from '../../shared/types';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

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
  setBooks(value:book[]){
    this.books = value;
  }
}
