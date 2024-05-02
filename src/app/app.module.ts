import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './user/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './provider/registration/registration.component';
import { KitchenComponent } from './provider/kitchen/kitchen.component';

import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { MenuComponent } from './provider/menu/menu.component';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { InterceptorService } from './service/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    LoginComponent,
    RegistrationComponent,
    KitchenComponent,
    UserRegistrationComponent,
    MenuComponent,
    RegisterUserComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
