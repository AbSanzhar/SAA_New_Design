import {Component, OnInit} from '@angular/core';
import {DataControlService} from '../../../services/data-control.service';
import {ApiService} from '../../../api/api.service';
import {MatDialog} from '@angular/material/dialog';
import {TeacherComponent} from '../../teacher/teacher.component';
import * as jwt_decode from 'jwt-decode';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  paginator = {
    length: 0,
    size: 1,
    page: 0,
  };
  lang: any;
  public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
  public IdToken = this.DecodedToken.jti;
  private name: any;
  PubTypeCounts;
  UserDegreeCounts;
  publishCount;
  courceCount;
  disMembersCount;
  TeacherPublications: any[] = [];
  DepUsers: any[] = [];
  TeacherCourses: any[] = [];

  displayedColumns5 = ['id', 'name', 'type', 'priority', 'subPriority', 'subSubPriority', 'executor', 'customer', 'dirFullName', 'dept', 'agrDate', 'registerNumber', 'startDate', 'endDate', 'totalSum'];
  displayedColumns6 = ['courseId', 'FL', 'form', 'center', 'hours', 'price', 'deadlines', 'certificates', 'level', 'File'];

  public s = this.getDecodedAccessToken(localStorage.getItem('token'));
  public tokenId = this.s.jti;
  public currentUser;
  public userDepts = [];
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
              private translateService: TranslateService) {
  }

  ngOnInit(): void {
      this.lang = this.translateService.currentLang;
      this.getTeacherCourses(this.lang);
      this.language = this.lang;
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
    this.getTeacherCourses(this.language);
    this._api.getUserById(this.tokenId).subscribe(
        res => {
          this.currentUser = res;
          this.userDepts = res.usersDepts;
          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < res.roles.length; i++) {
            this.roles.push(res.roles[i].roleName);
            if (res.roles[i].roleName === 'Teacher') {
              this.getTeacherCourses(this.language);
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


  getTeacherCourses(lang) {
    this._api.getCourses(lang).subscribe(
        res => {
          console.log(res);
          this.TeacherCourses = res;
          for (let i = 0; i < res.length; i++) {
            const startYear = new Date(res[i].startdate).getFullYear();
            const startmMonth = new Date(res[i].startdate).getMonth() < 0 ? '0'
                + (new Date(res[i].startdate).getMonth()
                    + 1) : (new Date(res[i].startdate).getMonth() + 1);
            const startDay = new Date(res[i].startdate).getDate() < 0 ? '0'
                + new Date(res[i].startdate).getDate() : new Date(res[i].startdate).getDate();
            this.TeacherCourses[i].startdate = startDay + '/' + startmMonth + '/' + startYear;

            const endYear = new Date(res[i].enddate).getFullYear();
            const endMonth = new Date(res[i].enddate).getMonth() < 0 ? '0'
                + (new Date(res[i].enddate).getMonth() + 1) : (new Date(res[i].enddate).getMonth()
                + 1);
            const endDay = new Date(res[i].enddate).getDate() < 0 ? '0'
                + new Date(res[i].enddate).getDate() : new Date(res[i].enddate).getDate();
            this.TeacherCourses[i].enddate = endDay + '/' + endMonth + '/' + endYear;
          }
          // tslint:disable-next-line:only-arrow-functions
          this.TeacherCourses.sort(function(a, b) {
            if (a.courseId > b.courseId) {
              return -1;
            }
            if (b.courseId > a.courseId) {
              return 1;
            }
            return 0;
          });
        }, err => {
          console.log(err);
        }
    );
  }


  create(tab: string) {
    this._dialog.open(TeacherComponent, {
      width: '70%',
      data: tab
    }).afterClosed().subscribe(res => {
      if (typeof res !== 'undefined' && res !== 'false') {
        this._api.uploadCourse(res).subscribe(
            result => {
              console.log(result);
              this.getTeacherCourses(this.language);
            }, err => {
              console.log(err);
              this.getTeacherCourses(this.language);
            }
        );
      }
    });
  }

}
