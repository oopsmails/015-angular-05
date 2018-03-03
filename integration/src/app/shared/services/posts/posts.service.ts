import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpDataService } from '../http-data.service';

@Injectable()
export class PostsService extends HttpDataService {
  constructor(httpClient: HttpClient) {
    super('http://jsonplaceholder.typicode.com/posts', httpClient);
   }
}
