import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import{LoginComponent} from './user/login/login.component'
import { RegistrationComponent } from './provider/registration/registration.component';
import { KitchenComponent } from './provider/kitchen/kitchen.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { MenuComponent } from './provider/menu/menu.component';
import { RegisterUserComponent } from './user/register-user/register-user.component';
const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'}, 
  {path:'products', component:ProductsComponent},
  {path: "registration", component:RegistrationComponent},
  {path: 'kitchin', component:KitchenComponent},
  
  {path:'cart', component:CartComponent},
  {path:'user_login', component:LoginComponent }, 
 // {path:'user_login:id', component:LoginComponent }, 
 {path:'register_user',component:RegisterUserComponent},
 {path:'menu/:id',component:MenuComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
