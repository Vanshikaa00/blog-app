import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BlogsService} from '../services/blogs.service';
import {MyProfileService} from '../services/my-profile.service';
import {AppService} from '../services/app.service';

@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.scss']
})
export class BlogUpdateComponent implements OnInit {
id;
blogs;

blogname: string;
blogcategory: string;
blogstatus: number;
blogimage: string;
blogcontent: string;
blogowner: string;
blogid: number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private blogService: BlogsService,
              private myProfileService: MyProfileService,
              private appservice: AppService) { }

              ngOnInit() {
      this.activatedRoute.paramMap.subscribe( (params: ParamMap) => {
        this.id = params.get('blogid');
      });
      this.blogService.getBlogsById(this.id).subscribe(res => {
        this.blogs = res;
        console.log(this.blogs);
      });
              }
              editBlog() {
    this.blogService.updateBlog(this.id, this.blogs).subscribe( res => {
      this.blogs = res;
      alert('Blog Updated!');
    });
              }

  //
  // ngOnInit() {
  //   this.activatedRoute.queryParams.subscribe(data => {
  //     this.id = data.id;
  //     console.log('blog ' + this.id);
  //   });
  //   this.blogService.getBlogsById(this.id).subscribe(data1 => {
  //     this.blogs = data1;
  //   });
  // }
  // updateBlogs(id ) {
  //   console.log(id);
  //   console.log(this.blogs.blogname);
  //   const json = {
  //     blogname: this.blogs.blogname ,
  //     blogcategory: this.blogs.blogcategory ,
  //     blogimage: this.blogs.blogimage ,
  //     blogcontent: this.blogs.blogcontent ,
  //     blogowner: this.blogs.blogowner
  //   };
  //   console.log(json);
  //   this.blogService.updateBlog(id, json);
  //   alert('Your blog has been updated! you will now proceed to my profile!');
  // }
  //

}



