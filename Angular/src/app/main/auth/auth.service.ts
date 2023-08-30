import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  userName:string = 'Faris'; 
  constructor() {}

  getUserName(){
    return this.userName;
  }
}
