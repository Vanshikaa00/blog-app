import { Injectable } from '@angular/core';
import {BlogsService} from './blogs.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
blogs = [];
  constructor(private blogsService: BlogsService) { }
}

