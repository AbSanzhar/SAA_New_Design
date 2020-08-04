import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {YearPlanComponent} from '../year-plan.component';

@Component({
  selector: 'app-edit-year-plan-one-table',
  templateUrl: './edit-year-plan-one-table.component.html',
  styleUrls: ['./edit-year-plan-one-table.component.css']
})
export class EditYearPlanOneTableComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public _data: any,
              private fb: FormBuilder,
              private _snackBar: MatSnackBar,
              private _dialog: MatDialogRef<YearPlanComponent>) {
  }
  public tableData = this._data;

  updateAcadMethForm;
  updateResearchForm;
  updateBudgetForm;
  updateOrgForm;
  updateEduSocialForm;
  updatePPForm;

  ngOnInit(): void {
    if(this.tableData.table == 'Acad-Meth') {
      console.log('sdfs');
      this.updateAcadMethForm = this.fb.group({
        acId: new FormControl(this.tableData.data.acId),
        activities: new FormControl(this.tableData.data.activities, Validators.required),
        implementation: new FormControl(this.tableData.data.implementation, Validators.required),
        timeFrame: new FormControl(this.tableData.data.timeFrame, Validators.required)
      });
    } else if(this.tableData.table == 'Research') {
      this.updateResearchForm = this.fb.group({
        commId: new FormControl(this.tableData.data.commId),
        activities: new FormControl(this.tableData.data.activities, Validators.required),
        output: new FormControl(this.tableData.data.output, Validators.required),
        plan: new FormControl(this.tableData.data.plan, Validators.required),
        implementation: new FormControl(this.tableData.data.implementation, Validators.required)
      });
    } else if(this.tableData.table == 'Budget') {
      this.updateBudgetForm = this.fb.group({
        budId: new FormControl(this.tableData.data.budId),
        activities: new FormControl(this.tableData.data.activities, Validators.required),
        plan: new FormControl(this.tableData.data.plan, Validators.required),
        implementation: new FormControl(this.tableData.data.implementation, Validators.required)
      });
    } else if(this.tableData.table == 'OrgMetAct') {
      this.updateOrgForm = this.fb.group({
        orgId: new FormControl(this.tableData.data.orgId),
        activities: new FormControl(this.tableData.data.activities, Validators.required),
        plan: new FormControl(this.tableData.data.plan, Validators.required),
        implementation: new FormControl(this.tableData.data.implementation, Validators.required)
      });
    } else if(this.tableData.table == 'EduSocial') {
      this.updateEduSocialForm = this.fb.group({
        eduId: new FormControl(this.tableData.data.eduId),
        activities: new FormControl(this.tableData.data.activities, Validators.required),
        implementation: new FormControl(this.tableData.data.implementation, Validators.required)
      });
    } else if(this.tableData.table == 'PP') {
      this.updatePPForm = this.fb.group({
        ppId: new FormControl(this.tableData.data.ppId),
        activities: new FormControl(this.tableData.data.activities, Validators.required),
        implementation: new FormControl(this.tableData.data.implementation, Validators.required)
      });
    }
  }

  updateAcadMeth(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
    this._dialog.close(this.updateAcadMethForm.value);
  }

  updateResearch(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
    this._dialog.close(this.updateResearchForm.value);
  }

  updateBudget(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
    this._dialog.close(this.updateBudgetForm.value);
  }

  updateOrg(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
    this._dialog.close(this.updateOrgForm.value);
  }

  updateEduSocial(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
    this._dialog.close(this.updateEduSocialForm.value);
  }

  updatePP(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
    this._dialog.close(this.updatePPForm.value);
  }
}
