import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { book } from '../../types';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{


  constructor(
    private  ApiService:ApiService,
    private authService: AuthService
    ) {}

private  _books: book[] = [];

@Input() get books(): book[] {
  return this._books;
}
 set books(value: book[]) {

  this._books = value;
}
  addToMyBooks(bookId: string) {
    const userDataString = this.authService.getUserDetails();

    // If there's no userDataString, the user probably isn't logged in.
    if (!userDataString) {
      alert('Please log in to add a book.');
      return;
    }

    // Parse the userDataString to get the user object
    const user = JSON.parse(userDataString)[0];


    // Check if user has a username property, if not, handle the error
    debugger;
    if (!user || !user.username) {
      alert('Failed to fetch user details. Please try again.');
      return;
    }

    const payload = {
      username: user.username,
      bookId: bookId
    }
    debugger;
    this.ApiService.postTypeRequest('api/books/addbook', payload).subscribe((res: any) => {
      if (res.status) {
        alert("book added successfully");
      } else {
        // Display a more user-friendly error message, perhaps using a modal or toast notification.
        alert("Failed to add the book. Please try again. 222");
        console.log(res.error);
      }
    }, 
    error => {
      // Handle HTTP errors (like network issues, server down, etc.)
      if(error.status === 401) {
        alert("Please log in to add a book.");}
      else if(error.status === 500){
        alert("the book is already added"); 
      }
      else
      alert("An error occurred. Please try again later.");
    });
}
}