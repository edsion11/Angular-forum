import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLogIn = false;
  public fans: number = 100;
  public goods: number = 100;
  public visits: number = 100;
  public username: string = 'EdsionGu';
  public userSign: string = '永远相信，美好的事物即将到来';
  public userIcon: string = '../../assets//img/user-boy.svg';
  constructor(private router:Router) {}
  ngOnInit(): void {}

}
