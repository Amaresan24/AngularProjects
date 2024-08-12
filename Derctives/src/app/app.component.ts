import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// String interpation 
  title = 'Derctives';
  nums = [45 , 56, 7, 89, 90];
  
  Movies = ["Vikram Vedha " , "MahaRaja " , "96 " , "vikram" , "Master"];
  // its is create temp variable to save the input 
  data = "";
  // its is funcation is push  the data in array 
  submit(){
    this.Movies.push(this.data);
  }
// its is creating object for Employee class 
emp :Employee = new Employee();

// its is  funcation to create employee 
create(){
  this.emp = {
    name : "Amaresh",
    age : 24,
    gender : "male",

  }
}
// its is creating object for Employee class 
emp1 : Employee = new Employee;

// emps is used to and  its buy input to user 
emps : Employee[] = [];

// its is funcation to save the Employee  is input 
saveEmployee(){
  this.emps.push(this.emp1);
}


///  is used to ngif  ---> its is boolean type  have or not 
isvisible = true;
hidelist(){
this.isvisible = !this.isvisible;
}
// It is used get  current  day ----
day = new Date().getDay();

// Store in Array in objects 
students = [

{
  name: "Amaresh",
  age: 23
},
{ name: "Vijay",
  age: 22},

{ name: "kamal",
age: 25},
    
{ name: "Raja",
age: 25}
    
]

// it is use to visiblity 
  visible = false;
  // function to  click  visiblity 
   show(){
 this.visible = !this.visible;
        }
}