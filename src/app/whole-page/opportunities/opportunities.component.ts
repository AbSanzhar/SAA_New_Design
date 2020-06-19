import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DataControlService} from "../../services/data-control.service";
import {EditEmployeeDialogComponent} from "./edit-employee-dialog/edit-employee-dialog.component";

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css']
})
export class OpportunitiesComponent implements OnInit {
  dataSource: any[] = [];
  displayedColumns = ['index', 'firstName', 'lastName', 'middleName', 'e-mail', 'actions'];

  constructor(private http: DataControlService, private editDialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.http.getAllEmployees().subscribe(response => {
      this.dataSource = response;
    });
  }

  openDialogEdit(employee) {
    this.editDialog.open(EditEmployeeDialogComponent, {
      data: employee
    }).afterClosed().subscribe(result => {
      this.getAllEmployees();
    });
  }

}
