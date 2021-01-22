import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLogIn = false;
  public fans = 100;
  public goods = 100;
  public visits = 100;
  public username = 'EdsionGu';
  public userSign = '永远相信，美好的事物即将到来';
  public userIcon = '../../assets//img/user-boy.svg';
  constructor(private router: Router) {}
  ngOnInit(): void {
    // alert('欢迎访问，测试用户名:admin,密码：admin');
  }
}
