import { Component, OnInit } from '@angular/core';
import {FeedService} from '../services/feed.service';
import {BlogsService} from '../services/blogs.service';
import {Router} from '@angular/router';
import {MyProfileService} from '../services/my-profile.service';
import {MyFollowingService} from '../services/my-following.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
blog;
myp;
followers;
search1;
product1;
  searchBox;
  blo: any;
  constructor(private feedService: FeedService,
              private blogService: BlogsService,
              private router: Router,
              private myProfileService: MyProfileService,
              private myFollowingService: MyFollowingService
              ) { }

  ngOnInit() {
    this.myFollowingService.getFollowers().subscribe((data) => {

      this.followers = data;
      console.log(this.followers[0].user1.userid);

    });

    this.blogService.getBlogs().subscribe(data1 => {
      this.blog = data1;
    });
  }

  removeBlogFromFeed(blogid: number) {
    this.blogService.removeBlogs(blogid).subscribe( (data) => {
      this.blogService.getBlogs().subscribe((data1) => {
        this.blog = data1;
      });
    });
  }

  readBlog(id: number) {
    console.log(id);
    this.router.navigate(['/blog-details'], { queryParams: {id}});
  }
update(value) {
    this.search1 = value;
    console.log(this.search1);
}
search(s: string) {
    this.blogService.getBlogsByBlogname(s).subscribe( (data) => {
      this.product1 = data;
    });
}

}

