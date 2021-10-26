import { Action } from '@ngrx/store';
import { UserLoginRequest} from "../../models/user";
import { LoginResponse } from "../../register/model/login-model";

export const LOGIN_USER = '[AUTH] login user';
export const LOGIN_USER_SUCCESS = '[AUTH] login user success';
export const LOGIN_USER_FAIL = '[AUTH] login user failed';

export const SAVE_USER = '[AUTH] save user to store';

export class LoginUser implements Action {
  readonly type = LOGIN_USER;
  constructor( public payload: UserLoginRequest) {}
}

export class SaveUserToStorage implements Action {
  readonly type = SAVE_USER;
  constructor( public payload: LoginResponse) {}
}

export class LoginUserSuccess implements Action {
  readonly type = LOGIN_USER_SUCCESS;
  constructor() {}
}

export class LoginUserFailed implements Action {
  readonly type = LOGIN_USER_FAIL;
  constructor( public payload: any) {}
}
// action types
export type LoginUserActions = LoginUser | LoginUserSuccess | LoginUserFailed
