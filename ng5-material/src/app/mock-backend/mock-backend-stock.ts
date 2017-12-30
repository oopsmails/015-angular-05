import { HttpRequest, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export function mockBackendStockService(url: string, method: string, request: HttpRequest<any>): Observable<HttpEvent<any>> {
    if (url.endsWith('/api/mockstocks') && method === 'GET') {
        const mockStocks = new Array<MockStock>();
        // tslint:disable-next-line:prefer-const
        for (let i of (Array.from(Array(101).keys()))) {
            mockStocks.push(new MockStock('SYMBOL' + i, 'Name abc ' + i));
        }
        return new Observable(resp => {
            resp.next(new HttpResponse({
                status: 200,
                body: mockStocks
            }));
            resp.complete();
        });
    }
}

export class MockStock {
    symbol: string;
    name: string;
    constructor(symbol: string, name: string) {
        this.symbol = symbol;
        this.name = name;
    }
}
