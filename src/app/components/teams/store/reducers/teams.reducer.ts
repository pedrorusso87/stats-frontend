import * as fromTeams from '../teams-actions'
import { GetTeamsState } from "../models/teams-model";

const initialState: GetTeamsState = {
  teamsList: [],
  getTeamsPending: false,
  error: null
}

export function reducer(state = initialState, action: fromTeams.TeamsActions) {
  switch(action.type) {
    case fromTeams.GET_TEAMS: {
      return  {
        ...state,
        getTeamsPending: true
      };
    }
    case fromTeams.GET_TEAMS_SUCCESS: {
      return  {
        ...state,
        teams: action.payload,
        getTeamsPending: false
      };
    }
    default: {
      return {
        ...state
      }
    }
  }
}
export const getTeamsPending = (state: GetTeamsState) => state.getTeamsPending;
export const getTeams = (state: GetTeamsState) => state.teamsList;
