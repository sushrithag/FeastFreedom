import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { menu } from '../menu';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  // [x: string]: any;
  public grandTotal:number=0;

 constructor(private cartService:CartService,private api:ApiService, private router:Router, private activeRoute:ActivatedRoute){ }
 menus:any
  cartItemList!:string[];

 ngOnInit(): void{ 
  let id = this.activeRoute.snapshot.params['id'];
    this.api.getMenu(id).subscribe(res=>{
      console.log(res);
      this.menus =res;
      this.grandTotal=this.cartService.getTotalPrice();
       this.menus.forEach((a:any)=>{
        Object.assign(a,{item:1,total:a.price});
       })
    })
    
  }

getFood(e:any,item:string){
 if(e.target.checked){
  console.log(item + 'Checked');
  this.cartService.addtoCart(item);
 }
 else{
  console.log(item + 'UNChecked');
  this.cartService.removeCartItem(item)
 }
 console.log(this.cartItemList);
}
  confirmation(){ 
    this.router.navigate(["/cart"])
  
}

 }

