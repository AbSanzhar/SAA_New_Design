import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {YearPlanComponent} from '../year-plan.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-add-year-plan-one-table',
  templateUrl: './add-year-plan-one-table.component.html',
  styleUrls: ['./add-year-plan-one-table.component.css']
})
export class AddYearPlanOneTableComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public _data: any,
              private _dialog: MatDialogRef<YearPlanComponent>,
              private _snackBar: MatSnackBar,
              private fb: FormBuilder) { }
  public table = this._data;
  acadMethForm;
  researchForm;
  budgetForm;
  orgForm;
  eduSocialForm;
  ppForm;
  ngOnInit(): void {
    this.acadMethForm = this.fb.group({
      activities: new FormControl('', Validators.required),
      implementation: new FormControl('', Validators.required),
      timeFrame: new FormControl('', Validators.required)
    });
    this.researchForm = this.fb.group({
      activities: new FormControl('', Validators.required),
      output: new FormControl('', Validators.required),
      plan: new FormControl('', Validators.required),
      implementation: new FormControl('', Validators.required),
    });
    this.budgetForm = this.fb.group({
      activities: new FormControl('', Validators.required),
      plan: new FormControl('', Validators.required),
      implementation: new FormControl('', Validators.required),
    });
    this.orgForm = this.fb.group({
      activities: new FormControl('', Validators.required),
      plan: new FormControl('', Validators.required),
      implementation: new FormControl('', Validators.required)
    });
    this.eduSocialForm = this.fb.group({
      activities: new FormControl('', Validators.required),
      implementation: new FormControl('', Validators.required)
    });
    this.ppForm = this.fb.group({
      activities: new FormControl('', Validators.required),
      implementation: new FormControl('', Validators.required)
    });
  }

  addAcadMeth(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
    this._dialog.close(this.acadMethForm.value);
  }

  addResearch(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
    this._dialog.close(this.researchForm.value);
  }

  addBuget(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
    this._dialog.close(this.budgetForm.value);
  }

  addOrg(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
    this._dialog.close(this.orgForm.value);
  }

  addEduSocial(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
    this._dialog.close(this.eduSocialForm.value);
  }

  addPP(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
    this._dialog.close(this.ppForm.value);
  }

}
