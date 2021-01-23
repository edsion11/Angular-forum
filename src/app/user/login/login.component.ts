import { Component, OnInit } from '@angular/core';
import { AuthService } from '../UserService/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(): void {}
  LoginUser(event, userForm: NgForm) {
    if (userForm.invalid) {
      return;
    }
    const that = this;
    const username = event.target.querySelector('#username').value;
    const password = event.target.querySelector('#password').value;
    if (!this.auth.network){
      if (username === 'admin' && password === 'admin'){
        that.auth.username = 'admin';
        this.auth.setLoggedIn(true);
        this.auth.isUserLoggedIn.next(true);
        this.router.navigate(['/userInfo']);
        return;
      }else{
        alert('用户名或密码错误');
      }
    }
    this.auth.loginUser(username, password).subscribe((data) => {
      alert(data.message);
      if (data.success === true) {
        that.auth.username = username;
        this.auth.setLoggedIn(true);
        this.auth.isUserLoggedIn.next(true);
        this.router.navigate(['/userInfo']);
      }
    });
  }
}
