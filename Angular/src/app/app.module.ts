import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './main/dashboad/dashboard/dashboard.component';
import { FLUCPipe } from './pipes/fluc.pipe';
import { SharedModule } from './main/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { BooksComponent } from './main/books/books/books.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FLUCPipe,
    BooksComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    FontAwesomeModule,
    FormsModule,

    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'books',
        component: BooksComponent
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
