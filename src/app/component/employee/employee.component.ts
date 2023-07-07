import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor(private _employeeServices: EmployeeService) {}
  employeesData: any[] = [];

  // Font Awsome Icons
  pencil = faPencil;
  trash = faTrashAlt;

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this._employeeServices.getEmployees().subscribe((x: any) => {
      console.log(x);
      this.employeesData = x;
    });
  }

  editEmployee(id: number) {
    console.log(id);
  }
}
