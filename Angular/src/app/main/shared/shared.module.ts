import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { Router, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    CardComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SideBarComponent,
    CardComponent,
    SearchComponent,
  ]
})
export class SharedModule { }
