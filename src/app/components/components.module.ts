import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { StatsPageModule } from './stats-page/stats-page.module';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { MatTableModule } from '@angular/material/table';
import { AddTeamComponent } from './add-team/add-team.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MAT_DATE_LOCALE} from "@angular/material/core";
@NgModule({
  declarations: [HomeComponent, TeamsComponent, AddTeamComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    StatsPageModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB'}]
})
export class ComponentsModule { }
