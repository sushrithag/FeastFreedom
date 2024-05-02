import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{map} from'rxjs/operators';
import { provider } from '../provider';
import { BehaviorSubject, Observable } from 'rxjs';
import { user } from '../user/user';
import { menu } from '../provider/menu';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  selectedName!:any;
  url = "http://localhost:8080/"; 
 // basUrl="http://localhost:8081/provider";
  //basUrl1="http://localhost:8081/user";
  
  //public menuList=new BehaviorSubject<any>([]);
menus:menu=new menu()
  provider:provider = new provider();
  user:user = new user();
  constructor(private http: HttpClient) { }
  // getProduct(){
  //   return this.http.get<any>("https://fakestoreapi.com/products")
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

   getProduct(){
   // return this.http.get<any>("http://localhost:8081/api/menu")
   return this.http.get<any>(this.url+"kitchen")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  // getmProducts(){
  //  // return this.http.get("http://localhost:8081/api/menu"+ menu )
  //   return this.menuList.asObservable();

  // }
  // getMenu(){
  //   return this.http.get<any>("http://localhost:8081/menu")
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }
  getMenu(id:any){
    return this.http.get<any>(this.url+"getmenu?id="+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getUser(){
    return this.http.get<any>("http://localhost:8081/user")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  // getMenu(menu:menu):Observable<Object>{
  //   console.log(menu);
  //   return this.http.get("http://localhost:8081/api/menu"+ menu )
   
  // }

  addProvider(provider:provider):Observable<Object>{    
    console.log(provider);
    return this.http.post("http://localhost:8081/provider",provider)
    // return this.http.post(`${this.basUrl}`, provider)
  }
  
  userRegistration(user:user):Observable<Object>{  
    console.log(user);
    return this.http.post("http://localhost:8081/user", user)
  }

  postKitchen(kitchenData: { serviceProviderName: any; email: any; password: any; kitchenWorkingDays: any; kitchenWorkingTimeStart: any; kitchenWorkingTimeEnd: any; kitchenImage: any; menuItems: any; }) {
    return this.http.post(this.url+"registerKitchen/", kitchenData);
  }

  postUser(body: any) {
    return this.http.post(this.url+"registerUser/", body);
  }

  login(email: any, password: any) {
    const params = { email: email, password: password };
    return this.http.post(this.url+"login/", params);
  }
  
 }
