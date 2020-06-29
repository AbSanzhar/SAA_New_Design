import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {AddMemberDialogComponent} from './add-member-dialog/add-member-dialog.component';

@Component({
  selector: 'app-add-disset',
  templateUrl: './add-disset.component.html',
  styleUrls: ['./add-disset.component.css']
})
export class AddDissetComponent implements OnInit {
  form: FormGroup;

  constructor(private dialog: MatDialog) {
    this.form = new FormGroup({
      universityName: new FormControl(''),
      startTime: new FormControl(''),
      endTime: new FormControl(''),
      foundationNo: new FormControl(''),
      quantity: new FormControl('')
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
