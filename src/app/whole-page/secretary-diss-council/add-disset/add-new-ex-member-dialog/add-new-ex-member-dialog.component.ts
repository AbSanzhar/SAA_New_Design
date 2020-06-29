import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-new-ex-member-dialog',
  templateUrl: './add-new-ex-member-dialog.component.html',
  styleUrls: ['./add-new-ex-member-dialog.component.css']
})
export class AddNewExMemberDialogComponent implements OnInit {
    form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      IIN: new FormControl(''),
      workPlace: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      description: new FormControl(''),
      login: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

}
