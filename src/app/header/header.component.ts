import { Component, OnInit } from '@angular/core';
import {AuthService} from '../user/UserService/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {
    this.auth.isUserLoggedIn.subscribe(value => {
      this.isloggedIn = value;
    });
  }
  public inputValue = '';
  color: string;
  isloggedIn: boolean;
  ngOnInit(): void {
  }
  onAddSearch(): void {
    window.location.href = 'https://www.baidu.com/s?wd=' + this.inputValue;
    this.inputValue = '';
  }
  logout(){
    this.auth.setLoggedIn(false);
    this.auth.isUserLoggedIn.next(false);
    this.router.navigate(['/home']);
  }
}
