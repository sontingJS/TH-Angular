import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public isShowForm1: boolean = true;
  public isShowForm2: boolean = false;
  public profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  public formSendCode = new FormGroup({
    code: new FormControl('', [Validators.required]),
  });
  public formNPW = new FormGroup({
    newpassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    reenterpassword: new FormControl('', [Validators.minLength(6), Validators.required]),
  });
  constructor() { }
  public changeForm(valid: boolean): void {
    if (valid) {

      this.isShowForm1 = !this.isShowForm1;
      console.log(this.isShowForm1)
    }
    else {
      console.log('nothing !')
    }
  }
  public changeForm2(): void {
 
      this.isShowForm2 = !this.isShowForm2;
      console.log(this.isShowForm2)
  }
  ngOnInit(): void {
  }

}
