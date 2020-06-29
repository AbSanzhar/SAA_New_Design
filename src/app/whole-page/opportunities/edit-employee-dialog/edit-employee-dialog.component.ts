import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {DataControlService} from '../../../services/data-control.service';

@Component({
  selector: 'app-edit-employee-dialog',
  templateUrl: './edit-employee-dialog.component.html',
  styleUrls: ['./edit-employee-dialog.component.css']
})
export class EditEmployeeDialogComponent implements OnInit {
  // formOptions: FormGroup = new FormGroup({
  //   option1: new FormControl(this.data.role[0] === 'professor' ? true : false),
  //   option2: new FormControl(this.data.role[1] === 'department of science' ? true : false),
  //   option3: new FormControl(this.data.role[2] === 'secretary of the council' ? true : false)
  // });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef<EditEmployeeDialogComponent>,
    private http: DataControlService
  ) {}

  ngOnInit(): void {
  }

  saveChange() {
    // let newForm = new FormGroup({
    //   id: new FormControl(this.data.id),
    //   firstName: new FormControl(this.data.firstName),
    //   lastName: new FormControl(this.data.lastName),
    //   middleName: new FormControl(this.data.middleName),
    //   email: new FormControl(this.data.email),
    //   role: new FormArray([
    //     new FormControl(this.formOptions.getRawValue().option1 ? 'professor' : 'none'),
    //     new FormControl(this.formOptions.getRawValue().option2 ? 'department of science' : 'none'),
    //     new FormControl(this.formOptions.getRawValue().option3 ? 'secretary of the council' : 'none')
    //   ])
    // });

    // this.http.updateEmployess(newForm.getRawValue()).subscribe(response => {
    //   this.dialog.close();
    // });
  }

}


