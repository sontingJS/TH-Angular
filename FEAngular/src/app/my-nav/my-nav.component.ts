import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss']
})
export class MyNAVComponent implements OnInit {
  public isLoggedIn$: Observable<boolean> = new Observable<boolean>();
  constructor(private authService: AuthService) { }
  public getToken = localStorage.getItem('token');
  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn();
  }
  public logout() {
    this.authService.logout();
    // console.log(this.isLoggedIn$);
  }
}
