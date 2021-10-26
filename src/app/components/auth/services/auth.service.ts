import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { LoginResponse } from "../register/model/login-model";
import { LoginRequest, UserRegistrationRequest } from "../register/model/register-model";
import { environment  } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.API_URL;
  constructor(
    private httpClient: HttpClient,
  ){}

  public register(registerRequest: UserRegistrationRequest): Observable<any> {
    return this.httpClient.post(`${this.url}/api/auth/signup`, registerRequest);
  }

  public login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${this.url}/api/auth/login`, loginRequest);
  }
}
