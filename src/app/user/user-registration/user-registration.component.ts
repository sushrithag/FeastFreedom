import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { provider } from 'src/app/provider';
import { user } from '../user';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { Subscription, map } from 'rxjs';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent  implements OnInit, OnDestroy{
user:any;
  private sub: Subscription = new Subscription;



  constructor(private api:ApiService, private auth: AuthService, private router:ActivatedRoute,private rout:Router){}
  ngOnInit(): void {

    this.api.getUser().subscribe(res=>{
      this.user =res;
    
    })

   
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  onSubmit(f:NgForm){

    this.api. userRegistration(f.value).subscribe(data=>{
      alert("User registerd successfully");
      f.reset();                
          this.rout.navigate(["/user_login"])
    },error=>alert("Sorry unable to registory"))
  }

  


  // onSubmit(f:NgForm){
  //   this.api.userRegistration(f.value).subscribe({
  //     next:(data:any)=>{
  //     // this.api.user.insert(data)
  //     alert("User registored successfully");
  //         f.reset();
  //          this.router.navigate(["/user_login"])
  //   },
  //       error:(error: any) =>{alert("Something is wrong. Please try again later!")}
  // })
  // }
  
}
