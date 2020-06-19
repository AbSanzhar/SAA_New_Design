import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-dialog-edit-role',
  templateUrl: './dialog-edit-role.component.html',
  styleUrls: ['./dialog-edit-role.component.css']
})
export class DialogEditRoleComponent implements OnInit {
  selectValue = new FormControl('1'); //секретарь

  constructor() { }

  ngOnInit(): void {
  }

}
