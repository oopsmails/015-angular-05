import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpDataService } from '../http-data.service';

@Injectable()
export class PostsService extends HttpDataService {
  constructor(http: Http) {
    super('http://jsonplaceholder.typicode.com/posts', http);
   }
}
