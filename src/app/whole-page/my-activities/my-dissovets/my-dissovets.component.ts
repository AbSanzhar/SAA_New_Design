import { Component, OnInit } from '@angular/core';
import {DataControlService} from '../../../services/data-control.service';
import {ApiService} from '../../../api/api.service';
import {MatDialog} from '@angular/material/dialog';
import {LanguageService} from '../../../services/language.service';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-my-dissovets',
  templateUrl: './my-dissovets.component.html',
  styleUrls: ['./my-dissovets.component.css']
})
export class MyDissovetsComponent implements OnInit {
  from: any = 1900;
  to: any = 2021;
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
  TeacherPublications: any[] = [];
  TeacherDisSovet: any[] = [];
  DepUsers: any[] = [];

  displayedColumnsDisSovet = ['disId', 'university', 'disRole', 'specialty', 'stopDate', 'numberAndDate'];
  displayedColumns5 = ['id', 'name', 'type', 'priority', 'subPriority', 'subSubPriority', 'executor', 'customer', 'dirFullName', 'dept', 'agrDate', 'registerNumber', 'startDate', 'endDate', 'totalSum'];

  public s = this.getDecodedAccessToken(localStorage.getItem('token'));
  public tokenId = this.s.jti;
  public currentUser;
  public userDepts = [ ];
  public roles = [];

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
      this.getTeacherPublications(lang);
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
        },
        err => {
          console.log(err);
        }
    );
    this.getTeacherPublications(this.language);
    this.getTeacherDisSovet(this.language);
    this._api.getUserById(this.tokenId).subscribe(
        res => {
          this.currentUser = res;
          this.userDepts = res.usersDepts;
          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < res.roles.length; i++) {
            this.roles.push(res.roles[i].roleName);
            if (res.roles[i].roleName === 'Teacher') {
              this.getTeacherPublications(this.language);
              this.getTeacherDisSovet(this.language);
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

  getTeacherPublications(lang) {
    const query = '?_page=' + this.paginator.page + '&_limit=' + this.paginator.size;
    this._api.getPublicationsPage(query, lang).subscribe(res => {
      this.TeacherPublications = res;
      console.log(res);
      for (let i = 0; i < res.length; i++) {
        this.TeacherPublications[i].pubYear = new Date(res[i].pubYear).getFullYear();
      }
      // tslint:disable-next-line:only-arrow-functions
      this.TeacherPublications.sort(function(a, b) {
        if (a.pubId > b.pubId) {
          return -1;
        }
        if (b.pubId > a.pubId) {
          return 1;
        }
        return 0;
      });
      this.TeacherPublications = res;
    }, err => {
      console.log(err);
    });
  }

  changeTableList(event) {
    this.paginator.page = event.pageIndex;
    this.paginator.size = event.pageSize;
    this.getTeacherPublications(this.language);
  }


  getTeacherDisSovet(lang) {
    this._api.getAllMyDisSovets(this.tokenId, lang).subscribe(
        res => {
          console.log(res);
          this.TeacherDisSovet = res;
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

}
