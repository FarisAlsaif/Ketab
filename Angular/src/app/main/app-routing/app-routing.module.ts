import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { BooksComponent } from '../books/books/books.component';
import { MybooksComponent } from '../books/mybooks/mybooks.component';
import { DashboardComponent } from '../dashboad/dashboard/dashboard.component';
import { ProfileComponent } from '../profile/profile.component';
import { AuthGuardService } from '../shared/services/auth-guard.service';
import { HomeComponent } from '../home/home.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: "",component: HomeComponent, canActivate: [AuthGuardService], children: [

    {
      path: 'profile',
    component: ProfileComponent
     },
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
    
]},
{
  path: '**',
  redirectTo: 'login'
},
 
  ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
