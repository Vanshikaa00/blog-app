import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private httpClient: HttpClient,
              private router: Router) { }


  getBlogs() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.get('http://localhost:8888/bloglist/getBlog', {headers});
  }

  getBlogsById(blogid) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.get('http://localhost:8888/bloglist/getBlog/' + blogid, {headers});
  }

  getBlogsByBlogname(blogname) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.get('http://localhost:8888/bloglist/getBlogByName/' + blogname, {headers});
  }

  addBlogs(data) {
    console.log(data);
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.post('http://localhost:8888/bloglist/addBlog' , data , {headers});
  }
  updateBlog(id, bdata) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.put('http://localhost:8888/bloglist/updateBlog/' + id, bdata, {headers});

  }


  getBlogsByCategory(category) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.get('http://localhost:8888/bloglist/getBlogByCategory/' + category, {headers});
  }

 removeBlogs(blogid) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.get('http://localhost:8888/blogfeed/removeFeedBlog/receive/' + blogid, {headers});
  }

  deleteBlog(blogid) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.delete('http://localhost:8888/bloglist/deleteBlog/' + blogid, {headers});
  }


}

