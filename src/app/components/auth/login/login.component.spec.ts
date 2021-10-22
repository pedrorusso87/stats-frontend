import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxSpinnerModule } from 'ngx-spinner';
import { of } from 'rxjs';
import { LoginRequest } from '../register/model/register-model';
import { AuthService } from '../services/auth.service';

import { LoginDialogComponent } from './login.component';

describe('LoginDialogComponent', () => {
  let component: LoginDialogComponent;
  let fixture: ComponentFixture<LoginDialogComponent>;
  const mockResponse = {
    authenticationToken: 'testToken',
    username: 'test'
  }
  const loginForm = new FormGroup(
    {
     username: new FormControl('', Validators.required),
     password: new FormControl('', Validators.required)
    }
  )
  let authService;
  class AuthServiceStub {
    constructor(){}
    login(loginRequest: LoginRequest) {}
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDialogComponent ],
      imports: [RouterTestingModule, ReactiveFormsModule, NgxSpinnerModule],
      providers: [{
        provide: AuthService,
        useValue: new AuthServiceStub()
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDialogComponent);
    component = fixture.componentInstance;
    component.loginForm = loginForm;
    authService = TestBed.inject(AuthService)
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  
  it('should set errors to true when form is invalid', () => {
    component.validateForm();
    expect(component.errors).toBe(true);
  });

  it('should call auth service', () => {
    const spy = spyOn(authService, 'login').and.returnValue(of(mockResponse));
    component.loginUser()
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
