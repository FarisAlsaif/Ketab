import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { book } from '../../types'

interface bookObj{
  book_id:string;
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=Arab';
  

  constructor(
    private httpClient: HttpClient,
    ) {}
  
  getBooks() {
    const books:book[] = [];
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
          books.push(book);
        });
      },
      error: (error) => {
        console.log(error.message);
      },
    });
    return books;
  }

  getMyBooks(booksIds:bookObj[]):book[]{
    const myBooks:book[] = [];
    booksIds.forEach((bookObj:bookObj) => {
      let book_id = bookObj.book_id;      

      this.httpClient.get(`https://www.googleapis.com/books/v1/volumes/${book_id}`).subscribe({
        next: (data:any) => {
          let book:book = {
            id: data.id,
            title: data.volumeInfo.title,
            authors: data.volumeInfo.authors,
            image:  data.volumeInfo.imageLinks?.thumbnail || data.volumeInfo.imageLinks?.smallThumbnail || 'https://via.placeholder.com/150',
            webReaderLink: data.accessInfo.webReaderLink,
          }
          myBooks.push(book);
        },
        error: (error) => {
          console.log(error.message);
        },
      });
    });
    return myBooks;
  }
}
