import { Action } from "@ngrx/store";

//Defining action types
export const GET_TOURNAMENTS = '[TOURNAMENTS] Get tournaments'
export const GET_TOURNAMENTS_SUCCESS = '[TOURNAMENTS] Get tournaments success'

export class GetTournaments implements Action {
  readonly type = GET_TOURNAMENTS;
}
export class GetTournamentsSuccess implements Action {
  readonly type = GET_TOURNAMENTS_SUCCESS;
  constructor(public payload: any) {}
}

export type TournamentActions = GetTournaments | GetTournamentsSuccess