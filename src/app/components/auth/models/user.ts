export interface UserLoginRequest {
  username: string;
  password: string;
}

export interface LoggedUserState {
  loginPending: boolean;
  error: any;
  currentUser: any;
}
