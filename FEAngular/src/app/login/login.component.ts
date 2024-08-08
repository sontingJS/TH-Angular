import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) { }
  public isShowForm: boolean = true;
  public isShowAlert: boolean = false;
  public profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.minLength(6), Validators.required]),
  });

  public toggle() {
    this.isShowForm = !this.isShowForm;
  }
  @Input() userName!: string;
  ngOnInit(): void {
    console.log(this.userName)
  }
  // @ViewChild('myValue') myValue!: ElementRef;
  public loggin(email: string, password: string): void {
    const user = {
      email,
      password
    }
    if (this.profileForm.valid) {
      if (user.email === 'admin@gmail.com' && user.password === '123456') {
        let generateRandomString = (length: number): string => {
          return Math.random().toString(36).substring(2, 2 + length);
        }

        const randomString = generateRandomString(10);
        localStorage.setItem('token', randomString);
        return this.authService.login(user,randomString);
      }
      else {
        this.isShowAlert = !this.isShowAlert;
        setTimeout(() => {
          this.isShowAlert = !this.isShowAlert;
        }, 3000)
      }
    }
    return;
  }
}
