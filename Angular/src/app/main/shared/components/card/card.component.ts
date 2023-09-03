import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { book } from '../../types';
import { BooksService } from '../../services/books/books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{


private  _books: book[] = [];

@Input() get books(): book[] {
  return this._books;
}
 set books(value: book[]) {

  this._books = value;
}

}
