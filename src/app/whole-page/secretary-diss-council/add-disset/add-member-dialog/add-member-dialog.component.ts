import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../../api/api.service';
import {MatDialog} from '@angular/material/dialog';
import {AddNewExMemberDialogComponent} from '../add-new-ex-member-dialog/add-new-ex-member-dialog.component';
import {ChangeDetection} from '@angular/cli/lib/config/schema';

@Component({
  selector: 'app-add-member-dialog',
  templateUrl: './add-member-dialog.component.html',
  styleUrls: ['./add-member-dialog.component.css']
})
export class AddMemberDialogComponent implements AfterViewInit {

  membersForm: FormGroup;
  selectedValue: any[];
  members: any;
  exUsers: any;
  disMember: any;


  elements: Sourse[] = [
    {value: 'Внутренний сотрудник', viewValue: 'Внутренний сотрудник'},
    {value: 'Внешний сотрудник', viewValue: 'Внешний сотрудник'}
  ];

  elements2: Sourse[] = [
    {value: 'Председатель совета', viewValue: 'Председатель'},
    {value: 'Член совета', viewValue: 'Член'}
  ];

  constructor(private formBuilder: FormBuilder,
              private service: ApiService,
              private dialog: MatDialog,
              private cd: ChangeDetectorRef) {
    this.membersForm = formBuilder.group({
      disMember: this.formBuilder.array([]),
    });
  }

  ngAfterViewInit(): void {
    this.selectedValue = new Array();
    this.selectedValue[0] = 'Внутренний сотрудник';
    this.disMember = this.membersForm.controls.disMember['controls'];
    this.getMembers();
    this.getExUsers();
    this.addDisMemberRow();
    this.cd.detectChanges();
  }

  getMembers() {
    this.service.getOwnUsers().subscribe(res => {
      this.members = res;
      console.log(res);
    }, error1 => {
      console.log(error1);
    });
  }

  getExUsers() {
    this.service.getExUsers().subscribe(
        res => {
          console.log(res);
          this.exUsers = res;
        }, err => {
          console.log(err);
        }
    );
  }

  addDisMemberRow() {
    const control = this.membersForm.controls.disMember as FormArray;
    const newDisMember: FormGroup = this.initItems();
    control.push(newDisMember);
    this.selectedValue.push('Внутренний сотрудник');
    this.cd.detectChanges();
  }

  deleteDisMember() {
    const control = this.membersForm.controls.disMember as FormArray;
    if (control.length > 1) {
      control.removeAt(control.length - 1);
      this.selectedValue.pop();
      this.cd.detectChanges();
    }
  }

  initItems(): FormGroup {
    return this.formBuilder.group({
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
    dialogRef.afterClosed().subscribe(
        newUser => {
          console.log(newUser);
          this.exUsers.push(newUser);
        }
    );
  }
}

interface Sourse {
  value: string;
  viewValue: string;
}
