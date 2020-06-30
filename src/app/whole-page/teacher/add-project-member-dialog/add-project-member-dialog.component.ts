import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../api/api.service';

@Component({
  selector: 'app-add-project-member-dialog',
  templateUrl: './add-project-member-dialog.component.html',
  styleUrls: ['./add-project-member-dialog.component.css']
})
export class AddProjectMemberDialogComponent implements OnInit {

  form: FormGroup;
  members: any;


  elements: Sourse[] = [
    {value: 'element-0', viewValue: 'Ведущий научный сотрудник'},
    {value: 'element-1', viewValue: 'Старший научный сотрудник'},
    {value: 'element-2', viewValue: 'Младший научный сотрудник'}
  ];

  constructor(private formBuilder: FormBuilder,
              private service: ApiService) {
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers() {
    this.service.getOwnUsers().subscribe(res => {
      this.members = res;
    });
  }

  addNewMember() {

  }
}

interface Sourse {
  value: string;
  viewValue: string;
}
