import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { book } from '../../main/shared/types'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=quilting';
   books:book[] = [];

  constructor(private httpClient: HttpClient) {}
  
  getBooks() {
    this.httpClient.get(this.booksUrl).subscribe((data:any) => {
      data.items.forEach((item:any) => {
        let book:book = {
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors,
          image:  item.volumeInfo.imageLinks.thumbnail || item.volumeInfo.imageLinks.smallThumbnail,
          webReaderLink: item.accessInfo.webReaderLink,
  }
        this.books.push(book);
      });
    });
    return this.books;
  }




}
