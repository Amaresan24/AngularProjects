import { Component } from '@angular/core';
import { Book } from '../book';
import { Brand } from '../brand';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
name:String;
author:String;
price:number;

book:Book;
books:Book[] = [];

Submit() {
this.book = new Book(this.name , this.author, this.price);
this.books.push(this.book);
console.log(this.book);
}

// 

/// Store only one String on Array  Start here 
brands : String[] = [];
bran  = "";
submits(){
  console.log(this.brands.push(this.bran));
}

/// Store only one String on Array  End here 
}
