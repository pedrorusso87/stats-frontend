import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { LoginResponse } from "../register/model/login-model";
import { LoginRequest, UserRegistrationRequest } from "../register/model/register-model";
import { map } from "rxjs/operators";
import { LocalStorageService } from "ngx-webstorage";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:8080'
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ){}

  public register(registerRequest: UserRegistrationRequest): Observable<any> {
    return this.httpClient.post(`${this.url}/api/auth/signup`, registerRequest);
  }

  public login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.url}/api/auth/login`, loginRequest).pipe(
      map(data => {
        this.localStorageService.store('authToken', data.authenticationToken);
        this.localStorageService.store('username', data.username);
        return data;
      })
    );
  }
}