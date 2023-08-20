import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


export interface header{
  title?:string,
  back?:boolean,
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }
  public headerSubject$ = new BehaviorSubject<header>({});

  public headerObservable$: Observable<header> = this.headerSubject$.asObservable();

  setHeader(headerDetails: header) {
    this.headerSubject$.next(headerDetails);
  }
  resetHeader() {
    this.headerSubject$.next({});
  }
}
