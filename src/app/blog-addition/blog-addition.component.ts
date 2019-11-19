import { Component, OnInit } from '@angular/core';
import {BlogsService} from '../services/blogs.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog-addition',
  templateUrl: './blog-addition.component.html',
  styleUrls: ['./blog-addition.component.scss']
})
export class BlogAdditionComponent implements OnInit {
  blog1;
  blogname;
  blogcategory;
  blogimage;
  blogowner;
  blogstatus;
  blogcontent;
  constructor(private blogService: BlogsService,
              private router: Router) { }

  ngOnInit() {
    this.blogService.getBlogs().subscribe((data) => {
      this.blog1 = data;
    });
  }

  update1(value: any) {
    this.blogname = value;
    console.log(this.blogname);
  }

  update2(value: any) {
    this.blogowner = value;
    console.log(this.blogowner);
  }

  update3(value: any) {
    this.blogcategory = value;
    console.log(this.blogcategory);
  }

  update4(value: any) {
    this.blogimage = value;
    console.log(this.blogimage);
  }

  update5(value: any) {
    this.blogcontent = value;
    console.log(this.blogcontent);
  }

  update6(value: any) {
    this.blogstatus = value;
    console.log(this.blogstatus);
  }

  get() {
    this.router.navigate(['/home']);
  }
  addblog() {
    const json = {
      blogname: this.blogname ,
      blogcategory: this.blogcategory,
      blogowner: this.blogowner,
      blogimage: this.blogimage,
      blogstatus: this.blogstatus,
      blogcontent: this.blogcontent

    };
    console.log(json);
    this.blogService.addBlogs(json).subscribe((data1) => {
    });
    alert('Blog added!');
    this.router.navigate(['/my-profile']);
  }
  toggleValue() {

    if (!this.blogstatus) {
      this.blogstatus = 0;
    } else {
      this.blogstatus = 1;
    }
  }

}
