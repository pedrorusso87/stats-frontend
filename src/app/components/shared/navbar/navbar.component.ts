@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showNav = true;

  constructor(
    public dialog: MatDialog,
    private localStorageService: LocalStorageService
  ) {
  }

  ngOnInit(): void {
  }

  isUserLoggedIn(): boolean {
    return this.localStorageService.retrieve("authToken") !== null;
}

  onLoginClicked(): void {
    this.showNav = false;
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      autoFocus: false,
      backdropClass: 'backdropBackground',
      width: '380px',
    })

    dialogRef.afterClosed().subscribe(() => {
      this.showNav = true;
    });
  }

  onCreateAccountClicked(): void {
    this.showNav = false;
    const dialogRef = this.dialog.open(RegisterModalComponent, {
      autoFocus: false,
      backdropClass: 'backdropBackground',
      width: '380px',
    })

    dialogRef.afterClosed().subscribe(() => {
      this.showNav = true;
    });
  }

}
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginDialogComponent } from '../../auth/login/login.component';
import { RegisterModalComponent } from '../../auth/register/register.component';
import {LocalStorageService} from "ngx-webstorage";

