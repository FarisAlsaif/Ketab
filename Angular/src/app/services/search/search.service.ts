import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { book } from '../../main/shared/types'
import { SearchComponent } from 'src/app/main/shared/search/search.component';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  books:book[] = [];
  constructor(private httpClient: HttpClient) {}
  
  getBooks(query: string) {

   try {
    const booksUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
   this.httpClient.get(booksUrl).subscribe((data:any) => {
     this.books=[]
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
   } catch (error) {
    console.log(error);
    return this.books
   }
 }
}
