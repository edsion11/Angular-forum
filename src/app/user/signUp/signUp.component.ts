import { Component, OnInit } from '@angular/core';
import { AuthService } from '../UserService/auth.service';
import { NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilCrypto } from '../../util';

@Component({
  selector: 'app-signup',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router, private utilCrypto: UtilCrypto) {}

  ngOnInit(): void {}

  Register(event, userForm: NgForm) {
    event.preventDefault();
    if(userForm.invalid){
      return
    }
    const username = event.target.querySelector('#username').value;
    const password = event.target.querySelector('#password').value;
    const email = event.target.querySelector('#email').value;
    // console.log(username + ' ' + password + ' ' + email);
    this.auth.registerUser(username, this.utilCrypto.encrypt(password), email).subscribe((data) => {
      console.log(data);
      if (data.success) {
        window.alert(data.message);
        userForm.resetForm();
        this.router.navigate(['sign']);
      } else {
        window.alert(data.message);
      }
    });
  }
}
