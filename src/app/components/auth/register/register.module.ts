import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterModalComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [RegisterModalComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [ AuthService
  ]
})
export class RegisterModule { }
