import { Component, OnInit } from '@angular/core';
import {DataControlService} from '../../../services/data-control.service';
import {ApiService} from '../../../api/api.service';
import {MatDialog} from '@angular/material/dialog';
import {LanguageService} from '../../../services/language.service';
import {TeacherComponent} from '../../teacher/teacher.component';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {
  paginator = {
    length: 0,
    size: 1,
    page: 0,
  };
  public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
  public IdToken = this.DecodedToken.jti;
  private name: any;
  PubTypeCounts;
  UserDegreeCounts;
  publishCount;
  courceCount;
  disMembersCount;
  TeacherEvents: any[] = [];
  DepUsers: any[] = [];

  displayedColumnsEvent = ['eventId', 'eventTitle', 'eventType', 'eventRole', 'eventDate', 'eventCity', 'Url', 'File'];
  displayedColumns5 = ['id', 'name', 'type', 'priority', 'subPriority', 'subSubPriority', 'executor', 'customer', 'dirFullName', 'dept', 'agrDate', 'registerNumber', 'startDate', 'endDate', 'totalSum'];

  public s = this.getDecodedAccessToken(localStorage.getItem('token'));
  public tokenId = this.s.jti;
  public currentUser;
  public userDepts = [ ];
  public roles = [];

  public whichTable = 0;
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
              private langService: LanguageService) {
  }
  ngOnInit(): void {
    this.langService.currentLanguage.subscribe(lang => {
      this.getTeacherEvents(lang);
      this.language = lang;
    });
    this._api.getPubTypeCount().subscribe(
        res => {
          console.log(res);
          this.PubTypeCounts = res;
        },
        err => {
          console.log(err);
        });

    this._api.getUserDegreeCount().subscribe(
        res => {
          console.log(res);
          this.UserDegreeCounts = res;
        },
        err => {
          console.log(err);
        }
    );
    this._api.getPublishCount().subscribe(
        res => {
          console.log(res);
          this.publishCount = res;
        },
        err => {
          console.log(err);
        }
    );
    this._api.getCourseCount().subscribe(
        res => {
          console.log(res);
          this.courceCount = res;
        }, err => {
          console.log(err);
        }
    );
    this._api.getDisMembersCount().subscribe(
        res => {
          console.log(res);
          this.disMembersCount = res;
        }, err => {
          console.log(err);
        }
    );
    this._api.getUserById(this.IdToken).subscribe(
        res => {
          console.log(res);
          if (res.patronymic != null) {
            this.name = res.firstName.charAt(0) + '.' + res.patronymic.charAt(0) + '.' + res.lastName;
          } else {
            this.name = res.firstName.charAt(0) + '.' + res.lastName;
          }
          // tslint:disable-next-line:prefer-for-of
        },
        err => {
          console.log(err);
        }
    );
    this.getTeacherEvents(this.language);
    this._api.getUserById(this.tokenId).subscribe(
        res => {
          this.currentUser = res;
          this.userDepts = res.usersDepts;
          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < res.roles.length; i++) {
            this.roles.push(res.roles[i].roleName);
            if (res.roles[i].roleName === 'Teacher') {
              this.getTeacherEvents(this.language);
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

  getTeacherEvents(lang) {
    this._api.getEvent(lang).subscribe(res => {
      console.log(res);
      this.TeacherEvents = res;
      for (let i = 0; i < res.length; i++) {
        const year = new Date(res[i].eventDate).getFullYear();
        // tslint:disable-next-line:max-line-length
        const month = (new Date(res[i].eventDate).getMonth() + 1) < 10 ? '0' + (new Date(res[i].eventDate).getMonth() + 1) : (new Date(res[i].eventDate).getMonth() + 1);
        // tslint:disable-next-line:max-line-length
        const day = new Date(res[i].eventDate).getDate() < 10 ? '0' + new Date(res[i].eventDate).getDate() : new Date(res[i].eventDate).getDate();
        this.TeacherEvents[i].eventDate = day + '/' + month + '/' + year;
      }
      // tslint:disable-next-line:only-arrow-functions
      this.TeacherEvents.sort(function(a, b) {
        if (a.eventId > b.eventId){
          return -1;
        }
        if (b.eventId > a.eventId){
          return 1;
        }
        return 0;
      });
    }, err => {
      console.log(err);
    });
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
      if(typeof res !== 'undefined' && res !== 'false') {
          this._api.uploadEvent(res).subscribe(result => {
            this.getTeacherEvents(this.language);
          }, err => {
            console.log(err);
            this.getTeacherEvents(this.language);
          });
      }
    });
  }

}
