import { Component, Input } from '@angular/core';
import { Book } from '../book';
import { Brand } from '../brand';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
submit() {
throw new Error('Method not implemented.');
}
  @Input("booksinput")books : Book[];

  // Store one value on Array 
  @Input("brandsinput")brands: String[];
  
}
