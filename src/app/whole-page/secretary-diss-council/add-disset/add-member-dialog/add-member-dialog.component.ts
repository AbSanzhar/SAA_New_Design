import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../../api/api.service';
import {MatDialog} from '@angular/material/dialog';
import {AddNewExMemberDialogComponent} from '../add-new-ex-member-dialog/add-new-ex-member-dialog.component';

@Component({
  selector: 'app-add-member-dialog',
  templateUrl: './add-member-dialog.component.html',
  styleUrls: ['./add-member-dialog.component.css']
})
export class AddMemberDialogComponent implements OnInit {

  membersForm: FormGroup;
  selectedValue: string;
  members: any;
  exUsers: any;
  disMember: any;


  elements: Sourse[] = [
    {value: 'Внутренний сотрудник', viewValue: 'Внутренний сотрудник'},
    {value: 'Внешний сотрудник', viewValue: 'Внешний сотрудник'}
  ];

  elements2: Sourse[] = [
    {value: 'Председатель', viewValue: 'Председатель'},
    {value: 'Член', viewValue: 'Член'}
  ];

  constructor(private formBuilder: FormBuilder,
              private service: ApiService,
              private dialog: MatDialog) {
    this.membersForm = formBuilder.group({
      disMember: this.formBuilder.array([]),
      // name: new FormControl('', Validators.required),
      // type: new FormControl('', Validators.required),
      // level: new FormControl('', Validators.required),
      // speciality: new FormControl('', Validators.required),
      // specialityInDis: new FormControl('', Validators.required),
      // workPlace: new FormControl('', Validators.required),
      // position: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.disMember = this.membersForm.controls.disMember['controls'];
    this.getMembers();
    this.getExUsers();
    this.addDisMemberRow();
  }

  getMembers() {
    this.service.getOwnUsers().subscribe(res => {
      this.members = res;
    });
  }

  getExUsers() {
    this.service.getExUsers().subscribe(
        res => {
          console.log(res);
        }, err => {
          console.log(err);
        }
    );
  }

  addDisMemberRow() {
    const control = this.membersForm.controls.disMember as FormArray;
    const newDisMember: FormGroup = this.initItems();
    control.push(newDisMember);
  }

  deleteDisMember() {
    const control = this.membersForm.controls.disMember as FormArray;
    if (control.length > 1) {
      control.removeAt(control.length - 1);
    }
  }

  initItems(): FormGroup {
    return this.formBuilder.group({
      // firstName: [null, Validators.required],
      // lastName : [null, Validators.required],
      memberType: [null, Validators.required],
      academicDegree: [null, Validators.required],
      specCode: [null, Validators.required],
      disSpecCode: [null, Validators.required],
      workPlace: [null, Validators.required],
      disPosition: [null, Validators.required],
      disId: [null],
      userId: [null]
    });
  }

  addNewMember(): void {
    const dialogRef = this.dialog.open(AddNewExMemberDialogComponent, {
      width: '50%',
    });
  }
}

interface Sourse {
  value: string;
  viewValue: string;
}
