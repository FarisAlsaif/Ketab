import { Component } from '@angular/core';
import { page } from '../types';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  pages: page[] = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: 'dashboard'
    },
    {
      name: 'Books',
      path: '/books',
      icon: 'book'
    },
        {
      name: 'My Books',
      path: '/mybooks',
      icon: 'book'
    },

  ]
}
