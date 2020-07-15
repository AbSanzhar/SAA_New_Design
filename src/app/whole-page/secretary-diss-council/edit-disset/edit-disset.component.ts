import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DialogEditRoleComponent} from '../dialog-edit-role/dialog-edit-role.component';
import {ApiService} from '../../../api/api.service';

@Component({
  selector: 'app-edit-disset',
  templateUrl: './edit-disset.component.html',
  styleUrls: ['./edit-disset.component.css']
})
export class EditDissetComponent implements OnInit {

  idDisset: number;
  dataSource: any[];
  displayedColumns = ['email', 'fullName', 'role', 'actions'];

  constructor(private route: ActivatedRoute, private editRoleDialog: MatDialog, private service: ApiService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.idDisset = parseInt(param.id);
    });
    this.getOneDisMembers();
    this.editRoleDialog.afterAllClosed.subscribe(res => {
      this.getOneDisMembers();
    });
  }

  editRole(member) {
    console.log(member);
    this.editRoleDialog.open(DialogEditRoleComponent, {
      data: {member, disId: this.idDisset},
    }).afterClosed().subscribe(result => {

    });
  }

  getOneDisMembers() {
    this.service.getOneDisMembers(this.idDisset).subscribe(
        res => {
          console.log(res);
          this.dataSource = res;
        }, err => {
          console.log(err);
        }
    );
  }
}
