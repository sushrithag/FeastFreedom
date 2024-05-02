import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 

  
  public cartItemList:any=[]
  public productList=new BehaviorSubject<any>([]);
  selectedID: any;
  constructor(private http:HttpClient) { }
  //geter method
  getProducts(){
    return this.productList.asObservable();

  }
  
  //seter method
  setProduct(menu:any){
    this.cartItemList.push(...menu);
    this.productList.next(menu)
  }
  addtoCart(menu:any){
    this.cartItemList.push(menu);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();

    console.log(this.cartItemList) 
  }
  getTotalPrice():number{
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal +=a.total;
    })
    return grandTotal;
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1);
      }
    }) 
    this.productList.next(this.cartItemList);   
  }
  removeAllCart(){
    this.cartItemList=[]
    this.productList.next(this.cartItemList);
  }
}
