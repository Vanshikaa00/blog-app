import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;
  invalidLogin = false;
  constructor(private router: Router, private loginService: LoginService, private authenService: AuthenticationService) { }

  ngOnInit() {
    if (this.loginService.checkLogin()) {
      this.router.navigate(['home']);
    }
  }

  login() {
    (this.authenService.authenticate(this.username, this.password).subscribe(
      data => {
       this.loginService.isLoggedIn(true);
       this.router.navigate(['home']);
       this.invalidLogin = false;
       if (!this.invalidLogin) {
          alert('Welcome to hogblog ' + this.username);
        }
      }
    ));
  }

  logout() {
this.loginService.isLoggedIn(false);
this.router.navigate(['login']);
  }
}
