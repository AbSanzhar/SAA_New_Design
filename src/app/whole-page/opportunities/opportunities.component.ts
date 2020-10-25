import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DataControlService} from '../../services/data-control.service';
import {EditEmployeeDialogComponent} from './edit-employee-dialog/edit-employee-dialog.component';
import {ApiService} from '../../api/api.service';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css']
})
export class OpportunitiesComponent implements OnInit {
  dataSource: any[] = [];
  displayedColumns = ['index', 'lastName', 'firstName', 'middleName', 'e-mail', 'actions'];

  // tslint:disable-next-line:variable-name
  constructor(private http: DataControlService, private editDialog: MatDialog, private _api: ApiService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this._api.getUsers().subscribe(response => {
      this.dataSource = response;
      this.dataSource.sort(this.compareEmployees);
    });
  }

  compareEmployees(a, b) {
    if (a.userId > b.userId) { return 1; }
    // tslint:disable-next-line:triple-equals
    if (a.userId == b.userId) { return 0; }
    if (a.userId < b.userId) { return -1; }
  }

  openDialogEdit(employee) {
    this.editDialog.open(EditEmployeeDialogComponent, {data: employee
    }).afterClosed().subscribe(result => {
      this.getAllEmployees();
    });
  }

}
