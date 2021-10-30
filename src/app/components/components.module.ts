import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { StatsPageModule } from './stats-page/stats-page.module';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { MatTableModule } from '@angular/material/table';
import { AddTeamComponent } from './add-team/add-team.component';
@NgModule({
  declarations: [HomeComponent, TeamsComponent, AddTeamComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    StatsPageModule,
    MatTableModule
  ]
})
export class ComponentsModule { }
