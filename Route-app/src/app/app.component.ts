import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Route-app';



// Button Navigate Start here 
constructor(private route :Router){};
home(){
  this.route.navigate(["home"])
}
contactUs(){
  this.route.navigate(["contact"])
}
aboutus(){
  this.route.navigate(["about"])
}



}
