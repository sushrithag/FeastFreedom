import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

public products:any=[];
public grandTotal:number=0;

constructor(private cartService:CartService, private api:ApiService){}
ngOnInit(): void {
  this.cartService.getProducts()
  .subscribe(res=>{
    this.products=res;
     this.grandTotal=this.cartService.getTotalPrice();
})
}
emptycart(){
   
    this.cartService.removeAllCart();
     alert("Checkedout successfully");
  }
}
