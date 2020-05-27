import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface RegisterData {
  username: string;
  password: string;
  email: string;
  success?: boolean;
  message?: String;
}
interface LoginData {
  username: string;
  password: string;
  success?: boolean;
  message?: String;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  registerUser(username, password, email) {
    return this.http.post<RegisterData>('/api/userApi/register', {
      username,
      password,
      email,
    });
  }
  loginUser(username,password){
    return this.http.post<LoginData>(  '/api/userApi/auth',{
      username,
      password
    })
  }
}
