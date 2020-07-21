import {Component, Inject, OnInit} from '@angular/core';
import {SignInDialogComponent} from './sign-in-dialog/sign-in-dialog.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  inputLogin = '';
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const L = document.getElementsByClassName('text') as HTMLCollectionOf<HTMLElement>;
    L[0].style.opacity = '0';
    const dialogRef = this.dialog.open(SignInDialogComponent, {
      width: '530px',
      data: this.inputLogin,
      backdropClass: 'dialog-content'
    });

    dialogRef.afterClosed().subscribe(result => {
      // tslint:disable-next-line:no-shadowed-variable
      const L = document.getElementsByClassName('text') as HTMLCollectionOf<HTMLElement>;
      L[0].style.opacity = '1';
      console.log(`Dialog result: ${result}`);
    });
  }
}
