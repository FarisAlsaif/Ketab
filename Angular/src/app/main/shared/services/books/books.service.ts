import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth/auth.service';
import { book } from '../../types'
import { disableDebugTools } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=Arab';
  

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
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

  getMyBooks(){
    const myBooks:book[] = [];
     this.httpClient.get(`http://localhost:4000/api/books/${this.authService.getUserName()}`).subscribe({
      
      next: (data:any) => {
        data.bookref.forEach((item:any) => {
          this.httpClient.get(`https://www.googleapis.com/books/v1/volumes/${item}`).subscribe({
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
            }
          })}
            
        )
      }
            ,
      error: (error) => {console.log(error.message)},
    });
     
     
     return myBooks;

  }
  

  addToMyBooks(book:book){
    this.httpClient.post('https://localhost:4000/api/Books', book)
  }


}
