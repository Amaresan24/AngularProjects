import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from '../car'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

brand = "";
@Output() brandAdded = new EventEmitter<string>();
addBrand() {
  if (this.brand) {
    this.brandAdded.emit(this.brand);
    this.brand = ""; // Clear input after emitting
  }
}

/// object 

  model = '';
  price: number;

  @Output() carAdded = new EventEmitter<Car>();
  addCar() {
    const newCar = new Car(this.model, this.price);
    this.carAdded.emit(newCar);
    // Clear form after adding the car
    this.model = '';
    this.price = NaN;
  
  
  
  
  }



}
