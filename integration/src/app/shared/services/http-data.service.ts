import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';

@Injectable()
export class HttpDataService {
constructor(private url: string, private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(this.url)
      .catch(this.handleError);
  }

  getAllPromise() {
    return this.httpClient.get(this.url)
      .toPromise()
      .catch(this.handleError);
  }

  create(resource) {
    return this.httpClient.post(this.url, JSON.stringify(resource))
      .catch(this.handleError);
  }

  update(resource) {
    return this.httpClient.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .catch(this.handleError);
  }

  delete(id) {
    return this.httpClient.delete(this.url + '/' + id)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error));
  }
}

