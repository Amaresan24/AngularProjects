import { Component, EventEmitter, Output } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  brandsName: String[] = [];

  onBrandAdded(newBrand: string) {
    this.brandsName.push(newBrand);
  }



  /// object 

  cars : Car[] = [];
  onCarAdded(newCar: Car) {
    this.cars.push(newCar);
  }
}
