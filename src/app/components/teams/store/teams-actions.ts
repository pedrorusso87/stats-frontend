import { Action } from "@ngrx/store";

//Defining action types
export const GET_TEAMS = '[TEAMS] Get teams'
export const GET_TEAMS_SUCCESS = '[Teams] Get teams success'

export class GetTeams implements Action {
  readonly type = GET_TEAMS;
}
export class GetTeamsSuccess implements Action {
  readonly type = GET_TEAMS_SUCCESS;
  constructor(public payload: any) {}
}

export type TeamsActions = GetTeams | GetTeamsSuccess
