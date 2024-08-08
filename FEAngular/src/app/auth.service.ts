import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) { }
  public logout() {
    console.log('cook');
    this.isLoggedin.next(false);
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
  public login(user: any, token: string) {
    console.log('log in with', user.email);
    this.isLoggedin.next(true);
    this.router.navigate(['/home'])

  }
  public isLoggedIn(): Observable<boolean> {
    let getToken = localStorage.getItem('token');
    if (getToken) {
      this.isLoggedin.next(true);
    }
    else {
      this.isLoggedin.next(false);
      this.router.navigate(['/login'])
    }
    return this.isLoggedin.asObservable();

  }
}
