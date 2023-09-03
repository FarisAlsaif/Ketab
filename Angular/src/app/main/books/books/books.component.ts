import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BooksService } from 'src/app/main/shared/services/books/books.service';
import { HeaderService } from 'src/app/main/shared/services/header/header.service';
import { book } from '../../shared/types';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements  OnInit {

  books:book[] = [];

  constructor(
    private headerService: HeaderService,
    private booksService: BooksService,
    private authService: AuthService,
    ) { }


  ngOnInit(): void {
    this.headerService.setHeader({
      title: 'Books',
      back: true,
    });
    this.books = this.booksService.getBooks();
    this.authService.login().subscribe((res)=>{
      console.log(res);
    }
    )
    

  }
  ngOnDestroy(): void {
    this.headerService.resetHeader();
  }
}
