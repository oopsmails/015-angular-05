import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { UserTokens } from '../../model/userTokens';

@Injectable()
export class UsertokenService {
  private userTokensUrl = 'http://localhost:8080/spring-security-oauth-server/tokens/fooClientIdPassword';
  
    constructor(private http: Http) { }
  
    getUserToken(): Observable<UserTokens> {
      return this.http.get(this.userTokensUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
      // .subscribe(
      //   data => {
      //     console.log("UserTokens: " + data.tokens);
      //   },
      //   (err: HttpErrorResponse) => {
      //     if (err.error instanceof Error) {
      //       console.log("Client-side error occured.");
      //     } else {
      //       console.log("Server-side error occured.");
      //     }
      //   }
      // );
    }
  
  }
  