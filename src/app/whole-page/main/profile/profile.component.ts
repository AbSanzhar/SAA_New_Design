import { Component, OnInit } from '@angular/core';
import {DataControlService} from '../../../services/data-control.service';
import {ApiService} from '../../../api/api.service';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  from: any = 1900;
  to: any = 2021;
  paginator = {
    length: 0,
    size: 1,
    page: 0,
  };
  TeacherPublications: any[] = [];
  TeacherEvents: any[] = [];
  TeacherDisSovet: any[] = [];
  TeacherPatents: any[] = [];
  DepUsers: any[] = [];
  TeacherScienceProjects: any[] = [];
  TeacherCourses: any[] = [];

  displayedColumnsPublication = ['pubId', 'File', 'pubType', 'Collaborators', 'Title', 'Year', 'City', 'Publisher', 'Page', 'Url', 'Doi'];
  displayedColumnsEvent = ['eventId', 'File', 'eventType', 'eventRole', 'eventTitle', 'eventDate', 'eventCity', 'Url'];
  displayedColumnsDisSovet = ['disId', 'university', 'disRole', 'specialty', 'stopDate', 'numberAndDate'];
  displayedColumnsPatent = ['ptntId', 'ptntNumber', 'ptntCountry', 'ptntIssueDate', 'ptntPublishedTR', 'ptntOwnerName', 'status', 'insertDate', 'whoCheck', 'kz', 'ru', 'en'];
  displayedColumnsDepUsers = ['userId', 'lastName', 'firstName', 'email', 'description', 'userType'];
  displayedColumns5 = ['id', 'name', 'type', 'priority', 'subPriority', 'subSubPriority', 'executor', 'customer', 'dirFullName', 'dept', 'agrDate', 'registerNumber', 'startDate', 'endDate', 'totalSum'];
  displayedColumns6 = ['courseId','File', 'FL', 'form', 'center', 'hours', 'price', 'deadlines', 'certificates', 'level'];

  public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
  public tokenId = this.DecodedToken.jti;
  public currentUser;
  public userDepts = [ ];
  public roles = [];

  public whichTable = 0;
  pageOfItems: Array<any>;

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  constructor(private http: DataControlService,
              private _api: ApiService) { }
  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }
  ngOnInit(): void {
    this.getTeacherPublications();
    this._api.getUserById(this.tokenId).subscribe(
        res => {
          this.currentUser = res;
          this.userDepts = res.usersDepts;
          for (let i = 0; i < res.roles.length; i++) {
            this.roles.push(res.roles[i].roleName);
            if(res.roles[i].roleName == 'Teacher') {
              this.getTeacherPublications();
              this.getTeacherEvents();
              this.getTeacherDisSovet();
              this.getTeacherPatents();
              this.getTeacherScienceProjects();
              this.getTeacherCourses();
            } else if(res.roles[i].roleName == 'Head_Of_Dept') {
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

  getTeacherPublications() {
    const query = '?_page=' + this.paginator.page + '&_limit=' + this.paginator.size;

    this._api.getPublicationsPage(query).subscribe(res => {
      console.log(res);
      this.TeacherPublications = res;
      for(let i = 0; i < res.length; i++) {
        this.TeacherPublications[i].pubYear = new Date(res[i].pubYear).getFullYear();
      }
      this._api.getPublications().subscribe(res2 => {
        this.paginator.length = res2.length;
      });
    }, err => {
      console.log(err);
    });
    // this._api.getPublications().subscribe(res => {
    //   console.log(res);
    //   this.TeacherPublications = res;
    // }, err => {
    //   console.log(err);
    // });
  }


  changeTableList(event) {
    console.log('asda');
    this.paginator.page = event.pageIndex;
    this.paginator.size = event.pageSize;
    this.getTeacherPublications();
  }

  getTeacherEvents() {
    this._api.getEvent().subscribe(res => {
      console.log(res);
      this.TeacherEvents = res;
      for(let i = 0; i < res.length; i++) {
        let year = new Date(res[i].eventDate).getFullYear();
        let month = new Date(res[i].eventDate).getMonth() < 0 ? '0' + (new Date(res[i].eventDate).getMonth() + 1) : (new Date(res[i].eventDate).getMonth() + 1);
        let day = new Date(res[i].eventDate).getDate() < 0 ? '0' + new Date(res[i].eventDate).getDate() : new Date(res[i].eventDate).getDate();
        this.TeacherEvents[i].eventDate = day + '/' + month + '/' + year;
      }
    }, err => {
      console.log(err);
    });
  }

  getTeacherDisSovet() {
    this._api.getSecDisSovet().subscribe(
      res => {
        console.log(res);
        this.TeacherDisSovet = res;
      }, err => {
        console.log(err);
        }
    );
  }

  getTeacherPatents() {
    this._api.getPatent().subscribe(
      res => {
        console.log(res);
        this.TeacherPatents = res;
        for(let i = 0; i < res.length; i++) {
          let year = new Date(res[i].ptntInsertedDate).getFullYear();
          let month = new Date(res[i].ptntInsertedDate).getMonth() < 0 ? '0' + (new Date(res[i].ptntInsertedDate).getMonth() + 1) : (new Date(res[i].ptntInsertedDate).getMonth() + 1);
          let day = new Date(res[i].ptntInsertedDate).getDate() < 0 ? '0' + new Date(res[i].ptntInsertedDate).getDate() : new Date(res[i].ptntInsertedDate).getDate();
          this.TeacherPatents[i].ptntInsertedDate = day + '/' + month + '/' + year;

          let year2 = new Date(res[i].ptntIssueDate).getFullYear();
          let month2 = new Date(res[i].ptntIssueDate).getMonth() < 0 ? '0' + (new Date(res[i].ptntIssueDate).getMonth() + 1) : (new Date(res[i].ptntIssueDate).getMonth() + 1);
          let day2 = new Date(res[i].ptntIssueDate).getDate() < 0 ? '0' + new Date(res[i].ptntIssueDate).getDate() : new Date(res[i].ptntIssueDate).getDate();
          this.TeacherPatents[i].ptntIssueDate = day2 + '/' + month2 + '/' + year2;
        }
      }, err => {
        console.log(err);
      }
    );
  }

  getDepUsers(id) {
    this._api.getDepUsers(id).subscribe(
        res => {
          console.log(res);
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

  getTeacherScienceProjects() {
    this._api.getScienceProject().subscribe(
        res => {
          console.log(res);
          this.TeacherScienceProjects = res;
        },
        error1 => {
          console.log(error1);
        }
    );
  }

  getTeacherCourses() {
    this._api.getCourses().subscribe(
        res => {
          console.log(res);
          this.TeacherCourses = res;
          for(let i = 0; i < res.length; i++) {
            let startYear = new Date(res[i].startdate).getFullYear();
            let startmMonth = new Date(res[i].startdate).getMonth() < 0 ? '0' + (new Date(res[i].startdate).getMonth() + 1) : (new Date(res[i].startdate).getMonth() + 1);
            let startDay = new Date(res[i].startdate).getDate() < 0 ? '0' + new Date(res[i].startdate).getDate() : new Date(res[i].startdate).getDate();
            this.TeacherCourses[i].startdate = startDay + '/' + startmMonth + '/' + startYear;

            let endYear = new Date(res[i].enddate).getFullYear();
            let endMonth = new Date(res[i].enddate).getMonth() < 0 ? '0' + (new Date(res[i].enddate).getMonth() + 1) : (new Date(res[i].enddate).getMonth() + 1);
            let endDay = new Date(res[i].enddate).getDate() < 0 ? '0' + new Date(res[i].enddate).getDate() : new Date(res[i].enddate).getDate();
            this.TeacherCourses[i].enddate = endDay + '/' + endMonth + '/' + endYear;
          }
        }, err => {
          console.log(err);
        }
    );
  }

  // tslint:disable-next-line:variable-name
  setWhichTable(number: number) {
    if (number !== this.whichTable) {
      this.whichTable = number;
    }
  }
}


