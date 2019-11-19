import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyFollowingService {

  constructor(private httpClient: HttpClient) { }
  followingUser(idtobefollowed) {
    console.log(idtobefollowed);
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.get('http://localhost:8888/following/follow/' + idtobefollowed , {headers});
  }
  getFollowers() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    const url = 'http://localhost:8888/following/allfollow' ;
    return this.httpClient.get(url, {headers});

  }
  getFollowersthatarefollowingyou() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    const url = 'http://localhost:8888/following/myfollowers' ;
    return this.httpClient.get(url, {headers});
  }
  unfollow(id) {
    console.log(id);
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    return this.httpClient.get('http://localhost:8888/following/unfollow/' + id , {headers});
  }

}
