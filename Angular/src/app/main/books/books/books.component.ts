import { Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header/header.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setHeader({
      title: 'Books',
      back: true,
    });
  }
  ngOnDestroy(): void {
    this.headerService.resetHeader();
  }

}
