import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginRequest } from '../register/model/register-model';
import { AuthService } from '../services/auth.service';
import {MatDialogRef} from "@angular/material/dialog";
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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private authService: AuthService,
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
    } as LoginRequest
    this.authService.login(userLoginRequest).subscribe(response => {
      if (response.authenticationToken) {
        this.spinner.hide();
        this.dialogRef.close();
        this.router.navigate(['/stats'])
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
