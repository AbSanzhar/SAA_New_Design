import {Component, OnInit} from '@angular/core';
import {DataControlService} from '../../../services/data-control.service';
import {ApiService} from '../../../api/api.service';
import * as jwt_decode from 'jwt-decode';
import {MatDialog} from '@angular/material/dialog';
import {TeacherComponent} from '../../teacher/teacher.component';
import {FormArray} from '@angular/forms';
import {DocumentCreator} from '../../teacher/rate-list-generator';
import {Packer} from 'docx';
import {ScienceListGenerator} from '../../teacher/ScienceListGenerator';
import {saveAs} from 'file-saver';

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
  public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
  public IdToken = this.DecodedToken.jti;
  private name: any;
  PubTypeCounts;
  UserDegreeCounts;
  publishCount;
  courceCount;
  disMembersCount;
  TeacherPublications: any[] = [];
  TeacherEvents: any[] = [];
  TeacherDisSovet: any[] = [];
  TeacherPatents: any[] = [];
  DepUsers: any[] = [];
  TeacherScienceProjects: any[] = [];
  TeacherCourses: any[] = [];

  displayedColumnsPublication = ['pubId', 'Title', 'pubType', 'Collaborators', 'Year', 'City', 'Publisher', 'Page', 'Url', 'Doi', 'pubStatus', 'File'];
  displayedColumnsEvent = ['eventId', 'eventTitle', 'eventType', 'eventRole', 'eventDate', 'eventCity', 'Url', 'File'];
  displayedColumnsDisSovet = ['disId', 'university', 'disRole', 'specialty', 'stopDate', 'numberAndDate'];
  displayedColumnsPatent = ['ptntNumber', 'ptntId', 'ptntCountry', 'ptntIssueDate', 'ptntPublishedTR', 'ptntOwnerName', 'status', 'insertDate', 'whoCheck', 'File'];
  displayedColumnsDepUsers = ['userId', 'lastName', 'firstName', 'email', 'description', 'userType'];
  displayedColumns5 = ['id', 'name', 'type', 'priority', 'subPriority', 'subSubPriority', 'executor', 'customer', 'dirFullName', 'dept', 'agrDate', 'registerNumber', 'startDate', 'endDate', 'totalSum'];
  displayedColumns6 = ['courseId', 'FL', 'form', 'center', 'hours', 'price', 'deadlines', 'certificates', 'level', 'File'];

  public s = this.getDecodedAccessToken(localStorage.getItem('token'));
  public tokenId = this.s.jti;
  public currentUser;
  public userDepts = [];
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
              // tslint:disable-next-line:variable-name
              private _api: ApiService,
              // tslint:disable-next-line:variable-name
              private _dialog: MatDialog) {
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  ngOnInit(): void {
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
    this._api.getUserById(this.tokenId).subscribe(
        res => {
          this.currentUser = res;
          this.userDepts = res.usersDepts;
          console.log(res);
        },
        err => {
          console.log(err);
        }
    );
  }
}


