import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStats from './store'

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  tournamentsList$ = this.store.select(fromStats.getTournamentsListState);
  tournaments: any;

  constructor(
    private store: Store
  ) {
    this.tournamentsList$.subscribe(tournaments => {
      this.tournaments = tournaments;
    })
  }

  ngOnInit(): void {
    console.log(this.tournaments);
  }

}
