import { Injectable } from '@angular/core';
import {BlogsService} from './blogs.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {

  constructor(private blogService: BlogsService,
              private httpClient: HttpClient) { }
  getProfile() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    const url = 'http://localhost:8888/profile/getUserData' ;
    return this.httpClient.get(url, {headers});

  }

  getBlogsWrittenByMe() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    const url = 'http://localhost:8888/bloglist/getBlogByCurrentUser' ;
    return this.httpClient.get(url, {headers});
  }

}
