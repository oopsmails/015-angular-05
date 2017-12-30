import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MockStock } from './mock-backend-stock';
import { User } from '../services/user.service';

@Injectable()
export class MockHttpClientUserService {
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>('https://jsonplaceholder.typicode.com/users');
  }

}
