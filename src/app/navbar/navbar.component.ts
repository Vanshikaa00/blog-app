import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
              private loginService: LoginService,
              private authenService: AuthenticationService) { }

  ngOnInit() {
    if (!this.loginService.checkLogin()) {
      this.router.navigate(['home']);
    }
  }
  logout() {
    this.loginService.isLoggedIn(false);
    this.router.navigate(['logout']);
  }

}
