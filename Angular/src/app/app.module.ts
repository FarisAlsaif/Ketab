import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './main/dashboad/dashboard/dashboard.component';
import { SharedModule } from './main/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { BooksComponent } from './main/books/books/books.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MybooksComponent } from './main/books/mybooks/mybooks.component';
import { LoginComponent } from './main/auth/login/login.component';
import { RegisterComponent } from './main/auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BooksComponent,
    MybooksComponent,
    LoginComponent,
    RegisterComponent,
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
        path: 'mybooks',
        component: MybooksComponent
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
