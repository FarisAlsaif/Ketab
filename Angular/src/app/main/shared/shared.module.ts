import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { Router, RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { StringReducePipe } from './pipes/string-reduce/string-reduce.pipe';




@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    CardComponent,
    SearchComponent,
    StringReducePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

  ],
  exports: [
    HeaderComponent,
    SideBarComponent,
    CardComponent,
    SearchComponent,
  ]
})
export class SharedModule { }
