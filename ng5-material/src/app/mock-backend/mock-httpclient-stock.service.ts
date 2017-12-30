import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MockStock } from './mock-backend-stock';

@Injectable()
export class MockHttpClientStockService {
  constructor(private httpClient: HttpClient) { }

  getStocks(): Observable<Array<MockStock>> {
    return this.httpClient.get<Array<MockStock>>('/api/mockstocks');
  }

}
