import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { mockBackendStockService } from './mock-backend-stock';
import { mockBackendUserService } from './mock-backend-user';

@Injectable()
export class MockHttpInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url: string = request.url;
    const method: string = request.method;

    console.log('interceptor url:', url);

    return mockBackendStockService(url, method, request)
      || mockBackendUserService(url, method, request)
      || next.handle(request); // fallback in case url isn't caught
  }

}
