import {Component, OnInit} from '@angular/core';
import {DataControlService} from '../../../services/data-control.service';
import {ApiService} from '../../../api/api.service';
import {MatDialog} from '@angular/material/dialog';
import {TeacherComponent} from '../../teacher/teacher.component';
import * as jwt_decode from 'jwt-decode';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-my-patents',
  templateUrl: './my-patents.component.html',
  styleUrls: ['./my-patents.component.css']
})
export class MyPatentsComponent implements OnInit {
  from: any = 1900;
  lang: any;
  to: any = 2021;
  paginator = {
    length: 0,
    size: 1,
    page: 0,
  };
  public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
  TeacherPatents: any[] = [];
  DepUsers: any[] = [];

  displayedColumnsPatent = ['ptntNumber', 'ptntId', 'ptntCountry', 'ptntIssueDate', 'ptntPublishedTR', 'ptntOwnerName', 'status', 'insertDate', 'whoCheck', 'File'];
  displayedColumns5 = ['id', 'name', 'type', 'priority', 'subPriority', 'subSubPriority', 'executor', 'customer', 'dirFullName', 'dept', 'agrDate', 'registerNumber', 'startDate', 'endDate', 'totalSum'];

  public s = this.getDecodedAccessToken(localStorage.getItem('token'));
  public tokenId = this.s.jti;
  public currentUser;
  public userDepts = [];
  public roles = [];

  public whichTable = 0;
  pageOfItems: Array<any>;
  language;

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  constructor(private http: DataControlService,
              // tslint:disable-next-line:variable-name
              private _api: ApiService,
              // tslint:disable-next-line:variable-name
              private _dialog: MatDialog,
              private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.lang = this.translateService.currentLang;
    this.getTeacherPatents(this.lang);
    this.language = this.lang;
    this.getTeacherPatents(this.language);
    this._api.getUserById(this.tokenId).subscribe(
        res => {
          this.currentUser = res;
          this.userDepts = res.usersDepts;
          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < res.roles.length; i++) {
            this.roles.push(res.roles[i].roleName);
            if (res.roles[i].roleName === 'Teacher') {
              this.getTeacherPatents(this.language);
            } else if (res.roles[i].roleName === 'Head_Of_Dept') {
              this.getDepUsers(this.userDepts[0].deptId);
            }
          }
          console.log(res);
        },
        err => {
          console.log(err);
        }
    );
  }


  changeTableList(event) {
    console.log('asda');
    this.paginator.page = event.pageIndex;
    this.paginator.size = event.pageSize;
  }

  getTeacherPatents(lang) {
    this._api.getPatent(lang).subscribe(
        res => {
          console.log(res);
          this.TeacherPatents = res;
          for (let i = 0; i < res.length; i++) {
            const year = new Date(res[i].ptntInsertedDate).getFullYear();
            // tslint:disable-next-line:max-line-length
            const month = (new Date(res[i].ptntInsertedDate).getMonth() + 1) < 10 ? '0' + (new Date(res[i].ptntInsertedDate).getMonth() + 1) : (new Date(res[i].ptntInsertedDate).getMonth() + 1);
            // tslint:disable-next-line:max-line-length
            const day = new Date(res[i].ptntInsertedDate).getDate() < 10 ? '0' + new Date(res[i].ptntInsertedDate).getDate() : new Date(res[i].ptntInsertedDate).getDate();
            this.TeacherPatents[i].ptntInsertedDate = day + '/' + month + '/' + year;

            const year2 = new Date(res[i].ptntIssueDate).getFullYear();
            // tslint:disable-next-line:max-line-length
            const month2 = (new Date(res[i].ptntIssueDate).getMonth() + 1) < 10 ? '0' + (new Date(res[i].ptntIssueDate).getMonth() + 1) : (new Date(res[i].ptntIssueDate).getMonth() + 1);
            // tslint:disable-next-line:max-line-length
            const day2 = new Date(res[i].ptntIssueDate).getDate() < 10 ? '0' + new Date(res[i].ptntIssueDate).getDate() : new Date(res[i].ptntIssueDate).getDate();
            this.TeacherPatents[i].ptntIssueDate = day2 + '/' + month2 + '/' + year2;
          }

          // tslint:disable-next-line:only-arrow-functions
          this.TeacherPatents.sort(function(a, b) {
            if (a.ptntId > b.ptntId) {
              return -1;
            }
            if (b.ptntId > a.ptntId) {
              return 1;
            }
            return 0;
          });
        }, err => {
          console.log(err);
        }
    );
  }

  getDepUsers(id) {
    this._api.getDepUsers(id).subscribe(
        res => {
          console.log(res);
          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < res.usersDeptsEntities.length; i++) {
            const tempUser = {
              userId: res.usersDeptsEntities[i].primaryKey.userEntity.userId,
              firstName: res.usersDeptsEntities[i].primaryKey.userEntity.firstName,
              lastName: res.usersDeptsEntities[i].primaryKey.userEntity.lastName,
              email: res.usersDeptsEntities[i].primaryKey.userEntity.email,
              description: res.usersDeptsEntities[i].primaryKey.userEntity.description,
              userType: res.usersDeptsEntities[i].userType
            };
            this.DepUsers.push(tempUser);
          }
        }, err => {
          console.log(err);
        }
    );
  }


  create(tab: string) {
    this._dialog.open(TeacherComponent, {
      width: '50%',
      data: tab
    }).afterClosed().subscribe(res => {
      if (typeof res !== 'undefined' && res !== 'false') {
        if (tab === 'patent') {
          this._api.addPatent(res).subscribe(result => {
            console.log(result);
            this.getTeacherPatents(this.language);
          }, error1 => {
            console.log(error1);
            this.getTeacherPatents(this.language);
          });
        }
      }
    });
  }

}
