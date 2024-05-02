import { HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY4MzI4NTk3NCwiZXhwIjoxNjgzMjg5NTc0LCJzdWIiOiIxIn0.qoRdUUZRdszK43mHqhWdzoyAYBeWNQPfZKU3vqjjBPc";
    let token = localStorage.getItem('token');
    if(token){
      const headers = new HttpHeaders().set("Authorization","Bearer "+token);
      const modified_req = req.clone({
        headers
      })
      return next.handle(modified_req);
    }
    return next.handle(req);
  }
}
