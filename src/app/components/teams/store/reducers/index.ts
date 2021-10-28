import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromTeams from './teams.reducer';
import { TeamsActions } from "../teams-actions";
import { GetTeamsState } from "../models/teams-model";

export interface TeamsState {
  teams: GetTeamsState
}

export const reducers: ActionReducerMap<TeamsState, TeamsActions> = {
  teams: fromTeams.reducer,
};

const teamsState = createFeatureSelector<TeamsState>('teams');
const getTeamsState = createSelector(teamsState, (state: TeamsState) => state.teams);

export const getTeamsList = createSelector(teamsState, (state: TeamsState) => state.teams);
export const getTeamsListPending = createSelector(getTeamsState, (state: GetTeamsState) => state.getTeamsPending)
