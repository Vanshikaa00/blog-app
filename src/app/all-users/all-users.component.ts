import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {MyFollowingService} from '../services/my-following.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  users;

  constructor(private loginService: LoginService,
              private myFollowingService: MyFollowingService,
              private router: Router) {
  }

  ngOnInit() {
    this.loginService.getAllUsers().subscribe( (data1) => {
      this.users = data1;
    });
  }

  follower(id1) {
    this.myFollowingService.followingUser(id1).subscribe((data) => {
    });
    this.router.navigate(['/home'], {queryParams: {id: id1}});
  }
}
