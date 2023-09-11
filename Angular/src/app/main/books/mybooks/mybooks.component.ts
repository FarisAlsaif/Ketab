import { Component, OnInit } from '@angular/core';
import  { BooksService } from '../../shared/services/books/books.service';
import { HeaderService } from '../../shared/services/header/header.service';
import { ApiService } from '../../shared/services/api.service';
import { book } from '../../shared/types';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.scss']
})
export class MybooksComponent implements OnInit {

  myBooks:book[] = [];


  constructor(
    private headerService: HeaderService,
    private booksService: BooksService,
    private apiService: ApiService,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
    this.headerService.setHeader({
      title: 'My Books',
      back: true,
    });
    
    const userDataString = this.authService.getUserDetails();

    if (!userDataString) {
      alert('Please log in');
      return;
    }
    const user = JSON.parse(userDataString)[0];

   this.apiService.getTypeRequest(`api/books/getMyBooks/${user.username}`).subscribe((res: any) => {
      if (res.status) {
        this.myBooks = this.booksService.getMyBooks(res.data);
      } else {
        alert("Failed to fetch your.");
        console.log(res.error);
      }
    },
    error => {
      alert("Failed to fetch your books. Please try again.");
      console.log(error);
   });
  }

}
