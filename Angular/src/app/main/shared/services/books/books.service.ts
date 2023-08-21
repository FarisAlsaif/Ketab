import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { book } from '../../types'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=Arab';
   books:book[] = [];

  constructor(private httpClient: HttpClient) {}
  
  getBooks() {
    this.httpClient.get(this.booksUrl).subscribe({
      next: (data:any) => {
        data.items.forEach((item:any) => {
          let book:book = {
            id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            image:  item.volumeInfo.imageLinks?.thumbnail || item.volumeInfo.imageLinks?.smallThumbnail || 'https://via.placeholder.com/150',
            webReaderLink: item.accessInfo.webReaderLink,
    }
          this.books.push(book);
        });
      },
      error: (error) => {
        console.log(error.message);
      },
      complete: () => {
        console.log('complete');
      }
    });
    return this.books;
  }

}
