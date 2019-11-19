import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { AuthGuardService } from '../guards/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public auth: AuthGuardService) { }

  login(credentials): Observable<string> {
    const token = this.auth.buildToken();
    return of(
      credentials.username === 'admin@admin.es' &&
      credentials.password === 'cohosting' ? token : null
    );
  }

  logout(): Observable<boolean> {
    sessionStorage.removeItem('token');
    return of(true);
  }
}
