import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { TournamentActions } from "../stats-actions";
import * as fromStats from './stats.reducer';

export interface TournamentsState {
  tournaments: any
}

export const reducers: ActionReducerMap<TournamentsState, TournamentActions> = {
  tournaments: fromStats.reducer,
};

const tournamentsState = createFeatureSelector<TournamentsState>('tournaments');

export const getTournamentsListState = createSelector(tournamentsState, (state: TournamentsState) => state.tournaments);