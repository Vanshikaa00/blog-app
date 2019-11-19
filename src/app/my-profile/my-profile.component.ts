import { Component, OnInit } from '@angular/core';
import {MyProfileService} from '../services/my-profile.service';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MyFollowingService} from '../services/my-following.service';
import {LoginService} from '../services/login.service';
import {BlogsService} from '../services/blogs.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  disabled = true;
  url = 'http://localhost:8888/profile/updateUserData';
  myp;
  blogsiwrote;
  blogidelete;
  followers;
  totalfollowing;
  followerrz;
   users;
  constructor(private myProfileService: MyProfileService ,
              private loginService: LoginService,
              private blogService: BlogsService,
              private router: Router,
              private httpClient: HttpClient,
              private myFollowingService: MyFollowingService,
              private http: HttpClient) { }

  ngOnInit() {
    this.myProfileService.getProfile().subscribe((data) => {
      this.myp = data;
    });
    this.myProfileService.getBlogsWrittenByMe().subscribe((data) => {
  this.blogsiwrote = data;
});
    this.myFollowingService.getFollowers().subscribe((data) => {
      this.followers = data;
    });
    this.myFollowingService.getFollowersthatarefollowingyou().subscribe((data) => {
      this.followerrz = data;
    });
  }

  getAllUSers() {
    this.loginService.getAllUsers().subscribe( (data1) => {
      this.users = data1;
    });
  }

  deletingBlog(blogid) {
    this.blogService.deleteBlog(blogid).subscribe( (data) => {
      this.myProfileService.getBlogsWrittenByMe().subscribe((data1) => {
        this.blogsiwrote = data1;
      });
    });
  }
  updatingBlog(id: number) {
    console.log(id);
    this.router.navigate(['/blog-update'], { queryParams: {id}});
  }

  unfollow(fid) {
this.myFollowingService.unfollow(fid).subscribe((data) => {
  this.myFollowingService.getFollowers().subscribe( (data2) => {
    this.followers = data2;
  });
});

  }

  gettotalfollowing() {
    this.totalfollowing = 0;
    for (let i = 0; i < this.followers.length; i++) {
      this.totalfollowing += this.followers[i].user1.userid;
    }
    console.log(this.totalfollowing);
  }

  follower(id1) {
    this.myFollowingService.followingUser(id1).subscribe((data) => {
    });
    this.router.navigate(['/home'], {queryParams: {id: id1}});
  }

   updateProfile() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    alert('Profile has been updated!');
    return this.http.put(this.url, this.myp, {headers}).subscribe(data => {
      console.log(data);
      this.router.navigate(['/my-profile']);
    });
  }

}
