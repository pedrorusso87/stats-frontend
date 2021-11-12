import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../services/auth.service';
import {MatDialogRef} from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import * as fromLogin from '../login/store';
import {UserLoginRequest} from "../models/user";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginDialogComponent implements OnInit, OnDestroy {
  hide = true;
  loginForm: FormGroup;
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  loginError = false;
  loginUserPending$ = this.store.select(fromLogin.getLoggedUserPending);
  loginUserError$ = this.store.select(fromLogin.getLoggedUserError);

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private authService: AuthService,
    private store: Store,
    public dialogRef: MatDialogRef<LoginDialogComponent>
    ) {
      this.loginForm = this.fb.group({
        username: this.username,
        password: this.password
      });
    }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.validateForm();
  }

  validateForm(): void {
    if (this.loginForm.valid) {
      this.spinner.show();
      this.loginUser()
    }
  }

  loginUser() {
    const userLoginRequest = {
      username: this.getEmail(),
      password: this.getPassword()
    } as UserLoginRequest

    this.store.dispatch(new fromLogin.LoginUser(userLoginRequest));
    this.listenForLogin();
  }

  listenForLogin(): void {
    this.loginUserPending$.pipe().subscribe(pending => {
      if(!pending) {
        this.spinner.hide();
        this.loginUserError$.pipe().subscribe(error => {
          if (!error) {
            this.loginError = false;
            this.dialogRef.close();
            this.router.navigate(['/teams']);
          } else {
            this.loginError = true;
          }
        })
      }
    })
  }

  getEmail(): any {
    return this.loginForm.get('username')?.value;
  }

  getPassword(): any {
    return this.loginForm.get('password')?.value;
  }

  ngOnDestroy(): void {
  }
}
