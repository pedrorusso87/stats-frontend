import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromStats from './store/reducers';
import { effects } from './store/effects/index';
import { StatsComponent } from './stats.component';
import { StatsService } from './services/stats.service';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [StatsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    EffectsModule.forRoot(effects),
    StoreModule.forFeature('tournaments', fromStats.reducers)
  ],
  providers: [StatsService]
})
export class StatsPageModule { }
