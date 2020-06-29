import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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


  elements: Sourse[] = [
    {value: 'element-0', viewValue: 'Внутренний сотрудник'},
    {value: 'element-1', viewValue: 'Внешний сотрудник'}
  ];

  elements2: Sourse[] = [
    {value: 'element-0', viewValue: 'Председатель'},
    {value: 'element-1', viewValue: 'Член'}
  ];

  constructor(private formBuilder: FormBuilder,
              private service: ApiService,
              private dialog: MatDialog) {
    this.membersForm = formBuilder.group({
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
      speciality: new FormControl('', Validators.required),
      specialityInDis: new FormControl('', Validators.required),
      workPlace: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers() {
    this.service.getOwnUsers().subscribe(res => {
      this.members = res;
      console.log(res);
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
