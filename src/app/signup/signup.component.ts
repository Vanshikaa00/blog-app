import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  fname;
  lname;
  model: any = {};
  name;
  pass;
  phno;
  constructor(private authenService: AuthenticationService,
              private loginService: LoginService,
              private router: Router,
              ) { }
url = 'http://localhost:8888/accountLogin/addUser';
  ngOnInit() {
  }
adduser() {
    console.log(this.name);
    const user = {
      fname: this.fname,
      lname: this.lname,
      phno: this.phno,
      username: this.name,
      password: this.pass
    };
    this.loginService.addUser(user);
    alert('Hello ' + this.fname + this.lname + ' your account has been created. You can log in now!');
}
}
