import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../UserService/register.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private auth: RegisterService, private router: Router) {}

  ngOnInit(): void {}
  Register(event, userForm: NgForm) {
    event.preventDefault();
    const username = event.target.querySelector('#username').value;
    const password = event.target.querySelector('#password').value;
    const email = event.target.querySelector('#email').value;
    console.log(username + ' ' + password + ' ' + email);
    this.auth.registerUser(username, password, email).subscribe((data) => {
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
