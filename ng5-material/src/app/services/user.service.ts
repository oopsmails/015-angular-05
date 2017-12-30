import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export interface User {
  id: number;
  name: string;
  // username: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
}


@Injectable()
export class UserService {

  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.serviceUrl);
  }

}
