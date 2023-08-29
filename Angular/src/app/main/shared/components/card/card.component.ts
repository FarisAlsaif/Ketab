import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { book } from '../../types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {


private  _books: book[] = [];

@Input() get books(): book[] {
  return this._books;
}
 set books(value: book[]) {

  this._books = value;
}

 ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
}
}
