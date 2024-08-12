import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  brands:String[] = [];
  brand = "";

  Submits(){
    console.log(this.brands.push(this.brand));
  }
showtable :boolean = false;




}
