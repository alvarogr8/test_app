import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    public router: Router,
  ) {}

  canActivate(): boolean {
    const token = sessionStorage.getItem('token');
    if (!token || token !== this.buildToken()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  buildToken(): string {
    // Invention of a token which take into account the hour
    const dateString = new Date().toISOString().slice(0, 13);
    return 'tmpToken' + dateString;
  }
}
