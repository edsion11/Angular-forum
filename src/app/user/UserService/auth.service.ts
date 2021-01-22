import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

interface RegisterData {
  username: string;
  password: string;
  email: string;
  success?: boolean;
  message?: string;
}
interface LoginData {
  username: string;
  password: string;
  success?: boolean;
  message?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  public username = '';
  public isLoggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
    localStorage.setItem('loggedIn', value.toString());
  }
  get isLoggedInSuccess() {
    return JSON.parse(
      localStorage.getItem('loggedIn') || this.isLoggedIn.toString()
    );
  }
  registerUser(username, password, email) {
    return this.http.post<RegisterData>('/api/userApi/register', {
      username,
      password,
      email,
    });
  }
  loginUser(username, password) {
    return this.http.post<LoginData>('/api/userApi/auth', {
      username,
      password,
    });
  }
}
