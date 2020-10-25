import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  constructor(private fb: FormBuilder,
              // tslint:disable-next-line:variable-name
              private _snackBar: MatSnackBar,
              private _dialog: MatDialogRef<AddNewsComponent>) { }
  date;
  Form;

  ngOnInit(): void {
    this.date = new Date();
    this.Form = this.fb.group({
      newsTitle: new FormControl('', Validators.required),
      bodyTitle: new FormControl('', Validators.required),
      date: new FormControl({value: this.date, disabled: true}, Validators.required),
      authorId: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  add(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
    this._dialog.close(this.Form.value);
  }
}
