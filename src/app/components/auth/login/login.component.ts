import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { combineLatest, Subject } from 'rxjs';
import { LoginRequest } from '../register/model/register-model';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginDialogComponent implements OnInit, OnDestroy {
  errors = false;
  errorMessage = null;
  hide = true;
  loginForm: FormGroup;
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private authService: AuthService
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
      this.errors = false;
      this.spinner.show();
      this.loginUser()
    } else {
      this.errors = true;
    }
  }

  loginUser() {
    const userLoginRequest = {
      username: this.getEmail(),
      password: this.getPassword()
    } as LoginRequest
    this.authService.login(userLoginRequest).subscribe(response => {
      if (response.authenticationToken) {
        this.spinner.hide();
        this.router.navigate(['/dashboard'])
      }
    })
  }

  listenForLogin(): void {
  }

  getEmail(): any {
    return this.loginForm.get('username')?.value;
  }

  getPassword(): any {
    return this.loginForm.get('password')?.value;
  }

  close(): void {
    this.errorMessage = null;
  }

  ngOnDestroy(): void {
  }
}
