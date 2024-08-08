import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.isLoggedIn().pipe(
      take(1),
      map((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          let getToken: string | null = localStorage.getItem('token');
          if (getToken) this.router.navigate(['/home']);
          else {
            this.router.navigate(['/login']);
          } return false;
        }
        return true;
      })
    );
    // return true;
  }
}