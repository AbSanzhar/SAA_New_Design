import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataControlService {

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/employees');
  }

  updateEmployess(employee): Observable<any> {
    return this.http.put('http://localhost:3000/employees/' + employee.id, employee);
  }

  getAllPatents(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/patents');
  }

  getAllPublications(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/publications');
  }

  getAllDissets(): Observable<any> {
    return this.http.get('http://localhost:3000/dissets');
  }

  getDisset(id): Observable<any> {
    return this.http.get('http://localhost:3000/dissets/' + id);
  }

  getUserLogin(data): Observable<any> {
    return this.http.get('http://localhost:3000/users?username=' + data.username + '&password=' + data.password);
  }

  getUser(id): Observable<any> {
    return this.http.get('http://localhost:3000/users/' + id);
  }

}
