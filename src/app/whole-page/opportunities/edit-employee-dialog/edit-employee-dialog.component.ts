import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {DataControlService} from '../../../services/data-control.service';
import {ApiService} from '../../../api/api.service';

@Component({
  selector: 'app-edit-employee-dialog',
  templateUrl: './edit-employee-dialog.component.html',
  styleUrls: ['./edit-employee-dialog.component.css']
})
export class EditEmployeeDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef<EditEmployeeDialogComponent>,
    private http: DataControlService,
    // tslint:disable-next-line:variable-name
    private _api: ApiService
  ) {}
  userRoles: any[] = [];
  formOptions: FormGroup;
  public newForm: FormGroup;
  ngOnInit(): void {
      // tslint:disable-next-line:prefer-for-of
      console.log(this.data);
    for (let i = 0; i < this.data.roles.length; i++) {
      this.userRoles.push(this.data.roles[i].roleName);
    }
    this.formOptions = new FormGroup({
      option1: new FormControl(this.userRoles.indexOf('Teacher') !== -1),
      option2: new FormControl(this.userRoles.indexOf('Science_Project_Manager') !== -1),
      option3: new FormControl(this.userRoles.indexOf('Science_Secretary_Dissovet') !== -1)
    });
  }

  saveChange() {
     this.newForm = new FormGroup({
      id: new FormControl(this.data.id),
      firstName: new FormControl(this.data.firstName),
      lastName: new FormControl(this.data.lastName),
      patronymic: new FormControl(this.data.patronymic),
      email: new FormControl(this.data.email),
      role: new FormArray([
        new FormControl(this.formOptions.getRawValue().option1),
        new FormControl(this.formOptions.getRawValue().option2),
        new FormControl(this.formOptions.getRawValue().option3)
      ])
    });
     const isTeacher = (this.newForm.get('role') as FormArray).controls[0].value;
     const isSciencePM = (this.newForm.get('role') as FormArray).controls[1].value;
     const isDisSec = (this.newForm.get('role') as FormArray).controls[2].value;
     // console.log(isTeacher);
     const teacherRole = {
          userId: this.data.userId,
          roleName: 'Teacher'
      };
     const scincePmRole = {
          userId: this.data.userId,
          roleName: 'Science_Project_Manager'
      };
     const disSecRole = {
          userId: this.data.userId,
          roleName: 'Science_Secretary_Dissovet'
      };
      // tslint:disable-next-line:triple-equals
     if (this.userRoles.indexOf('Teacher') != - 1 && !isTeacher) {
        this._api.deleteRole(teacherRole).subscribe(
            res => {
                // console.log(res);
            }, err => {
                // console.log(err);
            });
         // tslint:disable-next-line:triple-equals
     } else if (this.userRoles.indexOf('Teacher') == -1 && isTeacher) {
         this._api.addRole(teacherRole).subscribe(
             res => {
                 // console.log(res);
             },
             err => {
               // console.log(err);
             }
         );
         // tslint:disable-next-line:triple-equals
     } else if (this.userRoles.indexOf('Science_Project_Manager') != - 1 && !isSciencePM) {
         this._api.deleteRole(scincePmRole).subscribe(
             res => {
               // console.log(res);
             }, err => {
               // console.log(err);
             });
         // tslint:disable-next-line:triple-equals
     } else if (this.userRoles.indexOf('Science_Project_Manager') == -1 && isSciencePM) {
         this._api.addRole(scincePmRole).subscribe(
             res => {
                 // console.log(res);
             },
             err => {
               // console.log(err);
             }
         );
         // tslint:disable-next-line:triple-equals
     } else if (this.userRoles.indexOf('Science_Secretary_Dissovet') != - 1 && !isDisSec) {
         this._api.deleteRole(disSecRole).subscribe(
             res => {
                 // console.log(res);
             }, err => {
                 // console.log(err);
             });
         // tslint:disable-next-line:triple-equals
     } else if (this.userRoles.indexOf('Science_Secretary_Dissovet') == -1 && isDisSec) {
       this._api.addRole(disSecRole).subscribe(
           res => {
               // console.log(res);
           },
           err => {
             // console.log(err);
           }
       );
     }
     this.dialog.close();
  }

}


