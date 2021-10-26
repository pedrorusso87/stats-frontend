import * as fromLogin from '../login-actions';
import {LoggedUserState} from "../../../models/user";

export const initialState: LoggedUserState = {
  loginPending: false,
  error: null,
  currentUser: null
};

export function reducer(state = initialState, action: fromLogin.LoginUserActions): LoggedUserState {
  switch (action.type) {
    case fromLogin.LOGIN_USER: {
      return {
        ...state,
        loginPending: true,
      };
    }
    case fromLogin.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        loginPending: false,
        error: null
      };
    }
    case fromLogin.LOGIN_USER_FAIL: {
      return {
        ...state,
        loginPending: false,
        error: action.payload
      };
    }
    default: {
      return { ...state };
    }
  }
}

