import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  creds:any={
    email: '',
    password: ''
  }

  constructor(public api:ApiService,public authService:AuthService, private router:Router){}
    

  // onSubmit(f:NgForm){
  //   this.api.login(this.creds.email,this.creds.password).subscribe({
  //     next:(data:any) => {
  //       // console.log(JSON.stringify(data, null, 2));
  //       console.log(data);
  //       // let userid:number = data;
  //       // f.reset();

        
  //       if( data == null ){
  //         alert("Invalid Credentials!");
  //       }
  //       else{
  //         alert("Login successful!");
  //         localStorage.setItem('username',data['firstname']);
  //         // console.log(localStorage.getItem('username'));
  //         this.router.navigate(["/products"]);
  //       }
        
  //     },
  //     error:(error:any) => {console.log(error);alert("Something went wrong!")}
  //   });
  // }

  onSubmit(f:NgForm){
    this.authService.login(this.creds).subscribe({
      next:(data:any) => {
          alert("Login successful!");
          console.log(data);
          const token = data.token;
          console.log(token);
          this.authService.setToken(token);
          this.router.navigate(["/products"]);
      },
      error:(error:any) => {console.log(error);alert("Something went wrong!")}
    });
  }
  
}
