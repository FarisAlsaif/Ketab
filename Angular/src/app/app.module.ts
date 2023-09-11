import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './main/dashboad/dashboard/dashboard.component';
import { SharedModule } from './main/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { BooksComponent } from './main/books/books/books.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MybooksComponent } from './main/books/mybooks/mybooks.component';
import { InterceptorServiceService } from './main/shared/services/interceptor-service.service';
import { AuthModule } from './main/auth/auth.module';
import { ProfileComponent } from './main/profile/profile.component';
import { AppRoutingModule } from './main/app-routing/app-routing.module';
import { HomeComponent } from './main/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BooksComponent,
    MybooksComponent,
    ProfileComponent,
    HomeComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    FontAwesomeModule,
    FormsModule,
    AuthModule,
    RouterModule,
    AppRoutingModule,

  ],
  providers: [
{    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorServiceService,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
