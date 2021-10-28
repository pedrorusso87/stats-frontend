import {NgModule} from "@angular/core";
import {StatsComponent} from "../stats-page/stats.component";
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule } from "@angular/material/select";
import { EffectsModule} from "@ngrx/effects";
import { effects } from "../teams/store/effects";
import { StoreModule } from "@ngrx/store";
import * as fromStats from "../teams/store/reducers";
import { TeamsService } from "../teams/services/teams.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    EffectsModule.forRoot(effects),
    StoreModule.forFeature('getTeams', fromStats.reducers)
  ],
  providers: [TeamsService]
})
export class TeamsPageModule { }
