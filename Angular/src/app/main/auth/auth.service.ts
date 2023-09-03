import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  userName:string = 'Faris'; 
  constructor(private httpClient:HttpClient) {}

  getUserName(){
    return this.userName;
  }
  login(){
    return this.httpClient.post('http://localhost:4000/api/auth/login',
    {
      username:'faris',
      password:'Yas.99H'
    })
  }
    
}
