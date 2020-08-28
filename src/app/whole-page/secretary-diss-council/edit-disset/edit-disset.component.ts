import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DialogEditRoleComponent} from '../dialog-edit-role/dialog-edit-role.component';
import {ApiService} from '../../../api/api.service';
import {LanguageService} from '../../../services/language.service';

@Component({
  selector: 'app-edit-disset',
  templateUrl: './edit-disset.component.html',
  styleUrls: ['./edit-disset.component.css']
})
export class EditDissetComponent implements OnInit {

  idDisset: number;
  disInfo: string;
  dataSource: any[];
  displayedColumns = ['email', 'fullName', 'role', 'actions'];
  language;
  constructor(private route: ActivatedRoute, private editRoleDialog: MatDialog, private service: ApiService,
               private langService: LanguageService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      // tslint:disable-next-line:radix
      this.idDisset = parseInt(param.id);
    });
    this.langService.currentLanguage.subscribe(lang => {
      this.getOneDisMembers(lang);
      this.language = lang;
    });
    this.editRoleDialog.afterAllClosed.subscribe(res => {
      this.getOneDisMembers(this.language);
    });
  }

  editRole(member) {
    console.log(member);
    this.editRoleDialog.open(DialogEditRoleComponent, {
      data: {member, disId: this.idDisset},
    }).afterClosed().subscribe(result => {
      this.getOneDisMembers(this.language);
    });
  }

  getOneDisMembers(lang) {
    this.service.getOneDisMembers(this.idDisset, lang).subscribe(
        res => {
          console.log(res);
          this.dataSource = res.dissovetMembers;
          this.disInfo = res.disInfo;
        }, err => {
          console.log(err);
        }
    );
  }
}
