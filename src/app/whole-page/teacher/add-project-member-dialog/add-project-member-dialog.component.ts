import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../api/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-project-member-dialog',
  templateUrl: './add-project-member-dialog.component.html',
  styleUrls: ['./add-project-member-dialog.component.css']
})
export class AddProjectMemberDialogComponent implements OnInit {

  form: FormGroup;
  members: any;
  newProjMemForm: FormGroup;
  scienceMemberControls: any[];
  elements: Sourse[] = [
    {value: 'Ведущий научный сотрудник', viewValue: 'Ведущий научный сотрудник'},
    {value: 'Старший научный сотрудник', viewValue: 'Старший научный сотрудник'},
    {value: 'Младший научный сотрудник', viewValue: 'Младший научный сотрудник'}
  ];

  constructor(private formBuilder: FormBuilder,
              private service: ApiService,
              // tslint:disable-next-line:variable-name
              private _snackBar: MatSnackBar) {
    this.newProjMemForm = this.formBuilder.group({
      ScienceMember: this.formBuilder.array([])
    });
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.scienceMemberControls = this.newProjMemForm.controls.ScienceMember['controls'];
    this.getMembers();
    this.addProjectMemberRow(2);
  }

  getMembers() {
    this.service.getOwnUsers().subscribe(res => {
      this.members = res;
      console.log(res);
    });
  }

  addProjectMemberRow(scId) {
    const control = this.newProjMemForm.controls.ScienceMember as FormArray;

    // instantiate a new day FormGroup;
    const newScienceMember: FormGroup = this.initProjectMember(scId);

    // Add it to our formArray
    control.push(newScienceMember);
  }

  initProjectMember(scId): FormGroup {
    return this.formBuilder.group({
      scAddDate: [new Date()],
      scRole: [null, Validators.required],
      scId: [scId],
      userId: [null, Validators.required]
    });
  }

  deleteProjectMember() {
    const control = this.newProjMemForm.controls.ScienceMember as FormArray;
    if (control.length > 1) {
      control.removeAt(control.length - 1);
    }
  }

  succcess(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 2000,
      });
    }
}

interface Sourse {
  value: string;
  viewValue: string;
}
