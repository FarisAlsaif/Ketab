import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { book } from '../../types'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  books:book[] = [];
  constructor(private httpClient: HttpClient) {}
  
  getBooks(query: string) {
   try {
    const booksUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
   this.httpClient.get(booksUrl).subscribe({
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
      }
    });
    return this.books;
    } catch (error) {
      console.log(error);
    }
    return this.books;
    
 }
}
