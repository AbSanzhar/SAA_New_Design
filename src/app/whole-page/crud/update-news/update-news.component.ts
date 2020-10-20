import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {YearPlanComponent} from '../../year-plan/year-plan.component';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.css']
})
export class UpdateNewsComponent implements OnInit {

  Form;

  // tslint:disable-next-line:variable-name
  constructor(@Inject(MAT_DIALOG_DATA) public _data: any,
              private fb: FormBuilder,
              // tslint:disable-next-line:variable-name
              private _snackBar: MatSnackBar,
              // tslint:disable-next-line:variable-name
              private _dialog: MatDialogRef<YearPlanComponent>
  ) {
  }

  public tableData = this._data;
  date;

  ngOnInit(): void {
    this.Form = this.fb.group({
      newsId: new FormControl({value: this.tableData.newsId, disabled: true}, Validators.required),
      newsTitle: new FormControl(this.tableData.newsTitle, Validators.required),
      bodyTitle: new FormControl(this.tableData.bodyTitle, Validators.required),
      date: new FormControl({value: this.tableData.date, disabled: true}, Validators.required),
      authorId: new FormControl(this.tableData.author.userId, Validators.required),
      email: new FormControl(this.tableData.author.email, Validators.required)
    });
    this.date = this.tableData.date;
  }

  update(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
    this._dialog.close(this.Form.value);
  }
}
