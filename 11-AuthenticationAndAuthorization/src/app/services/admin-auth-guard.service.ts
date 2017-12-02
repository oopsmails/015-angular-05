import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService) { }

  canActivate(route, state: RouterStateSnapshot): boolean {
    const currentUser = this.authService.currentUser;
    if (currentUser && currentUser.admin) {
      return true;
    }

    this.router.navigate(['/no-access']);
    return false;
  }

}
