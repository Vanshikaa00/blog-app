import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  edit(bool: boolean) {
    localStorage.setItem('edit', String(bool));
    return bool;
  }
}
