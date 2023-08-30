import { Component, OnInit } from '@angular/core';
import  { BooksService } from '../../shared/services/books/books.service';
import { HeaderService } from '../../shared/services/header/header.service';

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.scss']
})
export class MybooksComponent implements OnInit {

  myBooks = this.booksService.getMyBooks();


  constructor(
    private booksService:BooksService,
    private headerService: HeaderService,
    ) { }

  ngOnInit(): void {
    this.headerService.setHeader({
      title: 'My Books',
      back: true,
    });
    this.booksService.getMyBooks();
  }

}
