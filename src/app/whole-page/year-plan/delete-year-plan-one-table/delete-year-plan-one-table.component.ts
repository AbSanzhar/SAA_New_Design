import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {YearPlanComponent} from '../year-plan.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-year-plan-one-table',
  templateUrl: './delete-year-plan-one-table.component.html',
  styleUrls: ['./delete-year-plan-one-table.component.css']
})
export class DeleteYearPlanOneTableComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public _data: any,
              private _dialog: MatDialogRef<YearPlanComponent>,
              private _snackBar: MatSnackBar) { }
  public tableData;
  ngOnInit(): void {
    this.tableData = this._data;
  }

  deleteOneTableRow(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
    this._dialog.close(this.tableData.data);
  }

}
