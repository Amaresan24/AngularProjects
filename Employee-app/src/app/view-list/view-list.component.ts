import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css'],
})
export class ViewListComponent {
  constructor(private es: EmployeeService) {}
  emps: Employee[] = [];
  getallemps() {
    this.es.getAllEmp().subscribe((X) => {
      this.emps = X;
    });
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getallemps();
  }
}
