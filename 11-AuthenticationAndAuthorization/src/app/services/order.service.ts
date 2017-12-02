import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class OrderService {

  constructor(private authHttp: AuthHttp, private http: Http) { }

  getOrders() {
    // const headers = new Headers();
    // const token = localStorage.getItem('token');
    // headers.append('Authorization', 'Bearer ' + token);
    // const options = new RequestOptions({ headers: headers }); // Headers from Angular!
    // return this.http.get('/api/orders', options).map(response => response.json()); // Using Http

    return this.authHttp.get('/api/orders').map(response => response.json()); // using AuthHttp
  }
}
