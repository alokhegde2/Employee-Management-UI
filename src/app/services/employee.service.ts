import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  URLS = {
    getEmployees: environment.baseUrl + 'api/Employee',
  };
  constructor(private http: HttpClient) {}

  getEmployees = () => {
    return this.http.get(this.URLS.getEmployees);
  };
}
