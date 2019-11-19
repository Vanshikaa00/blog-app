import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private httpClient: HttpClient, private router: Router) {
  }

  isLoggedIn(value: boolean) {
    sessionStorage.setItem('auth', String(value));
    return value;
  }

  checkLogin() {
    const auth = sessionStorage.getItem('auth');
    return JSON.parse(auth);
  }

  checkLogout() {
    sessionStorage.removeItem('username');
  }

  addUser(user) {
    return this.httpClient.post('http://localhost:8888/accountLogin/addUser', user).subscribe(res => {
      this.router.navigate(['login']);
    });
  }

  getAllUsers() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders( { Authorization: 'Basic ' + token });
    const url = 'http://localhost:8888/accountLogin/getUser' ;
    return this.httpClient.get(url, {headers});
  }

  edit(bool: boolean) {
    localStorage.setItem('edit', String(bool));
    return bool;
  }
}
