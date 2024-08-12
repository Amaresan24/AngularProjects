import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Angular !!!';
num1 = 89;
num2 = 78;
name ="";
sumbit(){
this.name = this.title;
}

}
