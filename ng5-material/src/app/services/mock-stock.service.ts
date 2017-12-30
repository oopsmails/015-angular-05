import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MockStockService {

  getStocks(): Observable<Array<Stock>> {
    const mockStocks = new Array<Stock>();
    // tslint:disable-next-line:prefer-const
    for (let i of (Array.from(Array(101).keys()))) {
        mockStocks.push(new Stock('SYMBOL' + i, 'Name abc ' + i));
    }

    const mockStocksSubject: BehaviorSubject<Array<Stock>> = new BehaviorSubject(mockStocks);
    return mockStocksSubject.asObservable();
  }
}

export class Stock {
  symbol: string;
  name: string;
  constructor(symbol: string, name: string) {
      this.symbol = symbol;
      this.name = name;
  }
}
