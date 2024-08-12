import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http : HttpClient  ) { }
baseUrl = "http://localhost:8080";
getAllEmp(){
return this.http.get<Employee[]>(`${this.baseUrl}/getfull_list`);
}

}
