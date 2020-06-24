import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DialogEditRoleComponent} from '../dialog-edit-role/dialog-edit-role.component';

@Component({
  selector: 'app-edit-disset',
  templateUrl: './edit-disset.component.html',
  styleUrls: ['./edit-disset.component.css']
})
export class EditDissetComponent implements OnInit {

  idDisset: number;
  dataSource: any[];
  displayedColumns = ['email', 'fullName', 'role', 'actions'];

  //fake members
  arrMembers = [
    {
      id: 0,
      email: 'test@email.com',
      firstName: 'testF',
      lastName: 'testL',
      middleName: 'testM',
      role: 'секретарь'
    },
    {
      id: 2,
      email: 'test@email.com',
      firstName: 'testF',
      lastName: 'testL',
      middleName: 'testM',
      role: 'секретарь'
    },
    {
      id: 3,
      email: 'test@email.com',
      firstName: 'testF',
      lastName: 'testL',
      middleName: 'testM',
      role: 'секретарь'
    }
  ]

  constructor(private route: ActivatedRoute, private editRoleDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.idDisset = parseInt(param.id);
    });
    this.dataSource = this.arrMembers;
  }

  editRole(member) {
    this.editRoleDialog.open(DialogEditRoleComponent, {
      data: member
    }).afterClosed().subscribe(result => {

    });
  }
}