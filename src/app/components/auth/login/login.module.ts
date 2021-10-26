import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoginRoutingModule } from './login-routing.module';
import { LoginDialogComponent } from './login.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers, effects } from './store';
@NgModule({
  declarations: [LoginDialogComponent],
  imports: [
    CommonModule,
    MatInputModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatIconModule,
    StoreModule.forFeature('loggedUser', reducers),
    EffectsModule.forFeature(effects),
  ],
  exports: [LoginDialogComponent]
})
export class LoginModule { }
