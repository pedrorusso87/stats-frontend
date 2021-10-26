import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginUserActions } from '../login-actions';
import * as fromLoginUser from './login.reducer';
import {LoggedUserState} from "../../../models/user";

export interface LoggedState {
  loggedUser: LoggedUserState;
}

export const reducers: ActionReducerMap<LoggedState, LoginUserActions> = {
  loggedUser: fromLoginUser.reducer,
};

const loggedUserState = createFeatureSelector<LoggedState>('loggedUser');

export const getLoggedUserState = createSelector(loggedUserState, (state: LoggedState) => state.loggedUser);

export const getLoggedUserPending = createSelector(getLoggedUserState, (state: LoggedUserState) => state.loginPending);
export const getLoggedUserError = createSelector(getLoggedUserState, (state: LoggedUserState) => state.error);

