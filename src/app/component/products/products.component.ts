import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/provider/menu';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  public menus:any
  public productList:any;
  constructor(private api:ApiService, private menuService: MenuService,private cartService:CartService){}
  username:any = localStorage.getItem('username');
  
  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      console.log(res);
      // this.productList.forEach((a:any)=>{
      //    Object.assign(a,{quantity:1,total:a.k_price});
      // })
    })
  }


  addtocart(item:any){
    this.cartService.addtoCart(item);
  }

}
