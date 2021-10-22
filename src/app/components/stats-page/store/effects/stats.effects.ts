import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs/operators";
import { StatsService } from "../../services/stats.service";
import * as fromStats from "../stats-actions";

@Injectable()
export class StatsEffects {

  constructor(
    private actions$: Actions,
    private statsService: StatsService
  ){}

  getTournamentList = createEffect(() => this.actions$.pipe(
    ofType(fromStats.GET_TOURNAMENTS),
    exhaustMap(action => this.statsService.getTournamentList().pipe(
      map(response => {
        console.log(response);
        return new fromStats.GetTournamentsSuccess({response})
      })
    ))
  ))
}