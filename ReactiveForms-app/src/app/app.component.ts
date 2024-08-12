import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ReactiveForms-app';

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    address: new FormGroup({
      door: new FormControl('', [Validators.required]),
      street: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
    }),
  });


  get name() {
    return this.myForm.get('name');
  }

  get age() {
    return this.myForm.get('age');
  }

  get door() {
    return this.myForm.get('address.door');
  }

  get street() {
    return this.myForm.get('address.street');
  }

  submit() {
    console.log(this.myForm); // Log the form's value
  }
}
