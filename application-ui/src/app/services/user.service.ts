import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:5000/users';
  constructor(private http: HttpClient) { }
  addUser(user: any): Observable<any> {
    const formData = new FormData();
    formData.append('fullName', user.fullName);
    formData.append('emailAddress', user.emailAddress);
    formData.append('password', user.password);
    const header = new HttpHeaders();
    const params = new HttpParams();
    const options = {
      params,
      reportProgress: true,
      headers: header
    };
    const req = new HttpRequest('POST', this.url, formData, options);
    return this.http.request(req);
  }
  login(user: any): Observable<any> {
    const formData = new FormData();
    formData.append('emailAddress', user.emailAddress);
    formData.append('password', user.password);
    const header = new HttpHeaders();
    const params = new HttpParams();
    const options = {
      params,
      reportProgress: true,
      headers: header
    };
    const req = new HttpRequest('POST', this.url, formData, options);
    return this.http.request(req);
  }
}
