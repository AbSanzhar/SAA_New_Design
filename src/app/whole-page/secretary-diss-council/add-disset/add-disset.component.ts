import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {AddMemberDialogComponent} from './add-member-dialog/add-member-dialog.component';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-add-disset',
  templateUrl: './add-disset.component.html',
  styleUrls: ['./add-disset.component.css']
})
export class AddDissetComponent implements OnInit {
  form: FormGroup;
  public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
  public tokenId = this.DecodedToken.jti;
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  constructor(private dialog: MatDialog) {
    this.form = new FormGroup({
      disInfo: new FormControl('', Validators.required),
      disStartDate: new FormControl('', Validators.required),
      disStopDate: new FormControl('', Validators.required),
      ministryOrder: new FormControl('', Validators.required),
      membersNum: new FormControl('', Validators.required),
      secretaryId: new FormControl(this.tokenId)
    });
  }

  ngOnInit(): void {
  }

  add(): void {
    const dialogRef = this.dialog.open(AddMemberDialogComponent, {
      width: '50%',
    });
  }
}
