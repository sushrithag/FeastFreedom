import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { menu } from '../provider/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService { 

  public cartItemList:any=[]
  public menulList=new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) { }
  //geter method
  getMenus(){
    return this.menulList.asObservable();

  }  
  //seter method
  setMenu(menu:any){
    this.cartItemList.push(...menu);
    this.menulList.next(menu)
  }
  addtoCart(product:any){
    this.cartItemList.push(menu);
    this.menulList.next(this.cartItemList);
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
  removeCartItem(menu:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(menu.id===a.id){
        this.cartItemList.splice(index,1);
      }
    }) 
    this.menulList.next(this.cartItemList);   
  }
  removeAllCart(){
    this.cartItemList=[]
    this.menulList.next(this.cartItemList);
  }
}
