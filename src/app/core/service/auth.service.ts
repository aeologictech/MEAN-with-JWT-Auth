import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(data) {
    return this.http.post(`${this.uri}/login`, data);
  }

  register(data) {
    return this.http.post(`${this.uri}/register`, data);
  }
}
