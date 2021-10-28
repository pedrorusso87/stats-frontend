import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginDialogComponent } from '../../auth/login/login.component';
import { RegisterModalComponent } from '../../auth/register/register.component';
import {LocalStorageService} from "ngx-webstorage";
import {AuthService} from "../../auth/services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private localStorageService: LocalStorageService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  isUserLoggedIn(): boolean {
    return this.localStorageService.retrieve("authToken") !== null;
}

  onLoginClicked(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      autoFocus: false,
      backdropClass: 'backdropBackground',
      width: '380px',
    })
  }

  onCreateAccountClicked(): void {
    const dialogRef = this.dialog.open(RegisterModalComponent, {
      autoFocus: false,
      backdropClass: 'backdropBackground',
      width: '380px',
    })
  }

  onLogoutClicked() {
    this.authService.logout();
  }
}

