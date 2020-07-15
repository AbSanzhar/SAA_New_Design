import {Component, Inject, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ApiService} from '../../../api/api.service';

@Component({
  selector: 'app-dialog-edit-role',
  templateUrl: './dialog-edit-role.component.html',
  styleUrls: ['./dialog-edit-role.component.css']
})
export class DialogEditRoleComponent implements OnInit {
  selectValue;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private service: ApiService) { }

  ngOnInit(): void {
    console.log(this.data);
    this.selectValue = this.data.member.disposition;
    console.log(this.selectValue);
  }

  changeDisPosition() {
    const user = {
      userId: this.data.member.user_id,
      disPosition: this.selectValue
    }
    this.service.updateDisPosistion(user, this.data.disId).subscribe(
        res => {
          console.log(res);
        }, err => {
          console.log(err);
        }
    );
  }

}
