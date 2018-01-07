import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot): Observable<boolean> {
    // not using .subscribe here, cannot unsubscribe and also expecting a return, here returning Observable<boolean>
    // see angular io api
    return this.auth.user$.map(user => {
      if (user) {
        return true;
      }

      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    });
  }

}
