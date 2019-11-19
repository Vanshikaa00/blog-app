import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
username;
  constructor(private router: Router,
              private loginService: LoginService,
              private authenService: AuthenticationService) { }

  ngOnInit() {
    if (this.loginService.checkLogin()) {
      this.router.navigate(['login']);
    }
  }

}
