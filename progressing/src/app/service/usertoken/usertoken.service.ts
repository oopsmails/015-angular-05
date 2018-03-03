import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/rx';
import { Injectable } from '@angular/core';
import { UserTokens } from '../../model/userTokens';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UsertokenService {
  private userTokensUrl = 'http://localhost:8080/spring-security-oauth-server/tokens/fooClientIdPassword';

    constructor(private httpClient: HttpClient) { }

    getUserToken(): Observable<UserTokens> {
      return this.httpClient.get(this.userTokensUrl);
    }

  }
