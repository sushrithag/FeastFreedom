import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  seqQue:any = [
    {
      "secQues": "what is your pet name?",
      "secQuesVal" : 1
    },
    {
      "secQues": "what is your nick name?",
      "secQuesVal" : 2
    },
    {
      "secQues": "what is your birth place?",
      "secQuesVal" : 3
    }
  ]  

  constructor(private api:ApiService, private router:Router){}
  
  onSubmit(f:NgForm){
    
    this.api.postUser(f.value).subscribe({
        next : 
        ( data : any ) => { 
          // console.log(data);
          alert("User added successfully!");
          this.router.navigate(["/products"]);
          f.reset();
        },
        error : 
        ( error : any ) => {
          alert("something went wrong while adding user details!");
        }
      })
  }

}
