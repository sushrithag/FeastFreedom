import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { Observable, map, } from 'rxjs';
import { user } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  basUrl="http://localhost:8081/";
  constructor(private http:HttpClient,
              private router:Router,
              private api:ApiService) { }

findOne(id:number):Observable<user>{
  return this.http.get<user>('/user/' + id).pipe(
    map((user:user)=> {
      return user;
    }))
}
  
// login(creds:any){
//       return this.http.post(this.basUrl + "login", creds);
//     }
logout(){
  this.removeToken();
  this.api.user.data = [];
  this.router.navigate(['/product']);
}

 isLoggedIn(){
  let token =localStorage.getItem('token');
  return token? true :false;
 }

 private baseUrl = 'http://localhost:8080'; 

  login(credentials: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/login', credentials);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }
}