import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BlogsService} from '../services/blogs.service';
import {MyProfileService} from '../services/my-profile.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
userid;
  blogs;
  user;
  role;
  Id: number;
  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
               private blogService: BlogsService,
               private myProfileService: MyProfileService,
               ) { }

  ngOnInit() {
    // this.activatedRoute.queryParams.subscribe((data) => {
    //   console.log('blog' + this.blogid);
    // });
    // this.blogService.getBlogsById(this.blogid).subscribe((data) => {
    //   this.blogs = data;
    // });
    this.activatedRoute.queryParams.subscribe(data => {
      this.Id = data.id;
      console.log('blog ' + this.Id);
    });
    this.blogService.getBlogsById(this.Id).subscribe(data1 => {
      this.blogs = data1;
    });
  }




  //   this.myProfileService.getProfile().subscribe(data => {
  //     console.log(data);
  //     this.user = data;
  //     this.role = this.user.role;
  //   });
  // }

}
