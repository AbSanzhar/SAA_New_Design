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
  dataSource: any[] = [];
  dataSource2: any[] = [];

  displayedColumns = ['No', 'File', 'Type', 'Collaborators', 'Title'];
  displayedColumns1 = ['No', 'File', 'Type', 'Role', 'Title', 'Year', 'City', 'Url'];
  displayedColumns2 = ['No', 'university', 'Role', 'specialty', 'stopDate', 'numberAndDate'];
  displayedColumns3 = ['No', 'ptntNumber', 'ptntCountry', 'ptntIssueDate', 'ptntPublishedTR', 'ptntOwnerName', 'status', 'insertDate', 'whoCheck', 'kz', 'ru', 'en'];
  displayedColumns4 = ['userId', 'lastName', 'firstName', 'email', 'description', 'userType'];
  displayedColumns5 = ['id', 'name', 'type', 'priority', 'subPriority', 'subSubPriority', 'executor', 'customer', 'dirFullName', 'dept', 'agrDate', 'registerNumber', 'startDate', 'endDate', 'totalSum'];
  displayedColumns6 = ['No', 'FL', 'form', 'center', 'hours', 'price', 'deadlines', 'certificates', 'level'];

  public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
  public tokenId = this.DecodedToken.jti;
  public currentUser;
  public userDepts = [ ];
  public roles = [];

  public whichTable = 0;

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  constructor(private http: DataControlService,
              private _api: ApiService) { }

  ngOnInit(): void {
    this.getAllPublications();
    this.getAllCourses();
    this._api.getUserById(this.tokenId).subscribe(
        res => {
          this.currentUser = res;
          this.userDepts = res.usersDepts;
          for (let i = 0; i < res.roles.length; i++) {
            this.roles.push(res.roles[i].roleName);
          }
          console.log(this.roles);
        },
        err => {
          console.log(err);
        }
    );
  }

  getAllPublications() {
    // this.http.getAllPublications().subscribe(response => {
    //   this.dataSource = response;
    // });
    this.dataSource = [{
      No: 1,
      File: 'ABC',
      Type: 'es',
      Collaborators: 'QWE',
      Title: 'WF'
    }];
  }

  getAllCourses() {
    this.dataSource2 = [{
      No: 1,
      FL: 'Сербин В.В., ассоц.проф.,к.т.н.,зав.каф ИС',
      form: 'Очное участие \"Электронная комерция\"',
      center: 'V Профессиональная интернет-конференция iProf \"E-commerce, Marketing&Sales\" 2015',
      hours: '8 часов',
      price: '5000 тенге',
      deadlines: '26-27 ноября 2015',
      certificates: 'Сертификат №123 от 26 ноября 2016 г.',
      level: 'Международный'
    }];
  }

  // tslint:disable-next-line:variable-name
  setWhichTable(number: number) {
    if (number !== this.whichTable) {
      this.whichTable = number;
    }
  }
}


