import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ApiService} from '../../../api/api.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-dialog-edit-role',
  templateUrl: './dialog-edit-role.component.html',
  styleUrls: ['./dialog-edit-role.component.css']
})
export class DialogEditRoleComponent implements OnInit {
  selectValue;
  dispositions = [];
  lang: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private service: ApiService,
              private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.lang = this.translateService.currentLang;
    this.getDisPositions(this.lang);
    console.log(this.data);
    this.selectValue = this.data.member.disPosition;
    console.log(this.selectValue);
  }

  changeDisPosition() {
    const user = {
      userId: this.data.member.userId,
      disPositionId: this.selectValue
    };
    this.service.updateDisPosistion(user, this.data.disId).subscribe(
        res => {
          console.log(res);
        }, err => {
          console.log(err);
        }
    );
  }

  getDisPositions(lang) {
    this.service.getDisPositions(lang).subscribe(
        res => {
          console.log(res);
          for (let i = 0; i < res.length; i++) {
            let temp = {
              viewValue: res[i].univer_name,
              value: res[i].univer_id
            };
            this.dispositions[i] = temp;
          }
        }, err => {
          console.log(err);
        }
    );
  }

}
