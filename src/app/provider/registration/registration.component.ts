import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
 // provider:provider = new provider();
 constructor(public api:ApiService, public router:Router){}

 kitchen: any = {
   kitchenWorkingDays: []
 };
 kitchenImage!: File;
 base64Image!:any;
 showPage2: boolean = false;
 // kitchen: {
 //   // other kitchen properties
 //   menuItems: any[];
 // } = {
 //   // other kitchen property values
 //   menuItems: []
 // };

 goToPage2() {
   // If valid, proceed to page 2
   this.showPage2 = true;
 }

 goToPage1() {
   // Logic to navigate back to page 1
   this.showPage2 = false;
 }

 registerKitchen() {
   if (!this.validateKitchenWorkingTime()) {
     // Display an error message 
     return;
   }

   // Combine form values 
   const kitchenData = {
     serviceProviderName: this.kitchen.serviceProviderName,
     email: this.kitchen.email,
     password: this.kitchen.password,
     kitchenWorkingDays: this.kitchen.kitchenWorkingDays.slice().toString(),
     kitchenWorkingTimeStart: this.kitchen.kitchenWorkingTimeStart,
     kitchenWorkingTimeEnd: this.kitchen.kitchenWorkingTimeEnd,
     kitchenImage: this.base64Image,
     kitchenImageFilename: this.kitchenImage.name,
     kitchenImageFileType: this.kitchenImage.type,
     menuItems: this.kitchen.menuItems
   };

   // Logic to save the kitchen details 
   console.log('Kitchen registered successfully!', kitchenData);

   this.api.postKitchen(kitchenData).subscribe({
     next : 
     ( data : any ) => { 
       // console.log(data);
       alert("Kitchen registered successfully!");
      //  this.router.navigate(["/products"]);
       // f.reset();
     },
     error : 
     ( error:any ) => {
       alert("something went wrong while adding kitchen details!");
     }
   })  
 }

 validateKitchenWorkingTime(): boolean {
   const start = this.kitchen.kitchenWorkingTimeStart;
   const end = this.kitchen.kitchenWorkingTimeEnd;

   // Ensuring start time is before end time
   if (start && end && start >= end) {
     console.log('Invalid kitchen working time');
     return false;
   }
   return true;
 }

 handleImageUpload(event: any) {
   this.kitchenImage = event.target.files[0];
   console.log('Selected before file:', this.kitchenImage);
   
   // Create a new FileReader
   const reader = new FileReader();

   // Define the onload event handler
   reader.onload = (e) => {
     // Extract the Base64 representation of the image
     let temp:any = reader.result;
     this.base64Image = temp.replace(/^data:image\/[^;]+;base64,/, '');

     // Do something with the Base64 image
     console.log(this.base64Image);
   };

   reader.readAsDataURL(this.kitchenImage);

   // Process the uploaded image file
   // const fileInput = event.target as HTMLInputElement;
   // const files = fileInput.files;

   // if (files && files.length > 0) {
   //   const selectedFile = files[0];
   //   console.log('Selected file:', selectedFile);
   // }
 }

 addMenuItem() {
   // this.kitchen.menuItems.push({
   //   itemName: '',
   //   vegNonVeg: '',
   //   price: 0
   // });

   if (!this.kitchen.menuItems) {
     this.kitchen.menuItems = []; // Initialize menuItems array if it's undefined
   }
 
   this.kitchen.menuItems.push({
     itemName: '',
     vegNonVeg: '',
     price: 0
   });

 }

 deleteMenuItem(index: number) {
   if (this.kitchen.menuItems && this.kitchen.menuItems.length > index) {
     this.kitchen.menuItems.splice(index, 1);
   }
 }

 toggleDay(day: string) {
   const index = this.kitchen.kitchenWorkingDays.indexOf(day);
   if (index > -1) {
     this.kitchen.kitchenWorkingDays.splice(index, 1); 
   } else {
     this.kitchen.kitchenWorkingDays.push(day); 
   }
 }
 
 isDaySelected(day: string): boolean {
   return this.kitchen.kitchenWorkingDays.includes(day); 
 }  
 
 cancel() {
   console.log('Registration canceled');
 }
  

}
