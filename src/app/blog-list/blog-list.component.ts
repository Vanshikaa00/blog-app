import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BlogsService} from '../services/blogs.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blog;
  category;
  constructor(private router: Router, private blogsService: BlogsService) { }

  ngOnInit() {
    this.blogsService.getBlogs().subscribe((data) => {
      this.blog = data;
    });
  }
  showFashion() {
    this.category = 'fashion';
    this.blogsService.getBlogsByCategory('fashion').subscribe((data1) => {
      this.blog = data1;
    });
  }
  showTechnology() {
    this.category = 'technology';
    this.blogsService.getBlogsByCategory('technology').subscribe((data2) => {
      this.blog = data2;
    });
  }
  showFood() {
    this.category = 'food';
    this.blogsService.getBlogsByCategory('food').subscribe((data3) => {
      this.blog = data3;
    });
  }
  showTravel() {
    this.category = 'travel';
    this.blogsService.getBlogsByCategory('travel').subscribe((data4) => {
      this.blog = data4;
    });
  }
  readBlog(id: number) {
    console.log(id);
    this.router.navigate(['/blog-details'], { queryParams: {id}});
  }
}
