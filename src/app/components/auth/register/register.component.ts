import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../services/auth.service';
import { UserRegistrationRequest } from './model/register-model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterModalComponent implements OnInit {
  registerForm: FormGroup;
  email = new FormControl('', Validators.required);
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  confirmedPassword = new FormControl('', Validators.required);
  userRegistrationRequest = {} as UserRegistrationRequest
  errors = false;
  hide = true;
  hidePassword = true;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService
  ) {
    this.registerForm = this.fb.group({
      email: this.email,
      username: this.username,
      password: this.password,
      confirmedPassword: this.confirmedPassword
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userRegistrationRequest = {
      username: this.getUsername(),
      email: this.getEmail(),
      password: this.getPassword()
    }
    //this.validateRegistrationForm();
    this.authService.register(this.userRegistrationRequest).subscribe(response => {
      console.log(response);
    });
  }

  validateRegistrationForm(): void {
    if (this.registerForm.valid) {
      this.errors = false;
      this.spinner.show();
    } else {
      this.errors = true;
    }
  }

  getEmail(): any {
    return this.registerForm.get('email')?.value;
  }

  getPassword(): any {
    return this.registerForm.get('password')?.value;
  }

  getUsername(): any {
    return this.registerForm.get('username')?.value;
  }

  getConfirmedPassword(): any {
    return this.registerForm.get('confirmedPassword')?.value;
  }

  validatePassword() {
    if (this.getConfirmedPassword() !== this.getPassword()) {
      this.registerForm.get('confirmedPassword').setErrors({ invalid: true })
    } else {
      this.registerForm.get('confirmedPassword').setErrors(null)
    }
  }

  getErrorMessage(): string {
    const error = Object.keys(this.registerForm.get('confirmedPassword').errors)[0];
    if (error === 'invalid' && this.getPassword() !== '') {
      return "Las claves deben ser iguales"
    } else {
      return "campo requerido"
    }
  }
}
