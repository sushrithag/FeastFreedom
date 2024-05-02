import { Component, ElementRef } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent {
 selectedFile:any;
 File = null;

  onFileSelected(event:any){
    this.selectedFile = <File>event.target.files[0];
  // console.log(event);
  // this.selectedFile = event.target.files[0];
  }
  constructor(private http:HttpClient){}
  onUpload(){
    const fd=new FormData();
    fd.append('image', this.selectedFile,this.selectedFile.name);
    this.http.post("http://localhost:8081/upload", fd).subscribe(res=>{
      console.log(res);
    });
    
  }
  confirmation(){
    alert("Saved your schedul");
  }

  kitchen: any = {
    kitchenWorkingDays: []
  };
  kitchenImage!: File;
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
    this.showPage2 = false;
  }

  goToPage1() {
    // Logic to navigate back to page 1
    this.showPage2 = true;
  }

  registerKitchen() {
    if (!this.validateKitchenWorkingTime()) {
      // Display an error message 
      return;
    }

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

