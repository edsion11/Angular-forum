import { Component, OnInit } from '@angular/core';
import {AuthService} from '../UserService/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  message = 'hello';
  constructor(private auth: AuthService, private router: Router) { }
  ngOnInit(): void {
  }
  logout(){
    this.auth.setLoggedIn(false);
    this.router.navigate(['/home']);
  }
}
