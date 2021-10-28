import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { TeamsService } from "../../services/teams.service";
import * as fromTeams from '../teams-actions';
import {map, switchMap} from "rxjs/operators";
import {from} from "rxjs";

@Injectable()
export default class TeamsEffects {

  constructor(
    private actions$: Actions,
    private store: Store,
    private teamsService: TeamsService
  ) {}

  getTeams$ = createEffect(() => this.actions$.pipe(
    ofType(fromTeams.GET_TEAMS),
    switchMap((data: any) => {
      return from(this.teamsService.getTeams()).pipe(
        map((response) => {
          return new fromTeams.GetTeamsSuccess(response)
        })
      )
    })
  ))
}
