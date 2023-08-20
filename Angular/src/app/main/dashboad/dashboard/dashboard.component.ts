import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/main/shared/services/header/header.service';
import { BooksService } from 'src/app/main/shared/services/books/books.service';
import { book } from '../../shared/types';
import { SearchService } from 'src/app/main/shared/services/search/search.service';
import { SearchComponent } from '../../shared/components/search/search.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  [x: string]: any;
  query: string ="" ;
  results: any[] | undefined;
  
}