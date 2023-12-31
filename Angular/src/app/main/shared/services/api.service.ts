import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:4000/';

  constructor(private http: HttpClient) { }

  getTypeRequest(url:string){
    return this.http.get(this.baseUrl + url).pipe(map((res: any) => {
      return res;
    }));
  }
  postTypeRequest(url:string, payload:any) {
    return this.http.post(`${this.baseUrl}${url}`, payload).pipe(map(res => {
    return res;
    }));
    }
    putTypeRequest(url:string, payload:any) {
      return this.http.put(`${this.baseUrl}${url}`, payload).pipe(map(res => {
      return res;
      }));
      }
      deleteTypeRequest(url:string) {
        return this.http.delete(`${this.baseUrl}${url}`).pipe(map(res => {
        return res;
        }));
        }
        
}
