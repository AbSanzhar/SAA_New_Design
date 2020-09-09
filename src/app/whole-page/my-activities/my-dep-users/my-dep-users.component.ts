import {Component, OnInit} from '@angular/core';
import {DataControlService} from '../../../services/data-control.service';
import {ApiService} from '../../../api/api.service';
import {MatDialog} from '@angular/material/dialog';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-my-dep-users',
  templateUrl: './my-dep-users.component.html',
  styleUrls: ['./my-dep-users.component.css']
})
export class MyDepUsersComponent implements OnInit {
  paginator = {
    length: 0,
    size: 1,
    page: 0,
  };
  public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
  public IdToken = this.DecodedToken.jti;
  private name: any;
  DepUsers: any[] = [];

  displayedColumnsDepUsers = ['userId', 'lastName', 'firstName', 'email', 'description', 'userType'];
  displayedColumns5 = ['id', 'name', 'type', 'priority', 'subPriority', 'subSubPriority', 'executor', 'customer', 'dirFullName', 'dept', 'agrDate', 'registerNumber', 'startDate', 'endDate', 'totalSum'];

  public s = this.getDecodedAccessToken(localStorage.getItem('token'));
  public tokenId = this.s.jti;
  public currentUser;
  public userDepts = [];
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
              private _dialog: MatDialog) {
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
          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < res.roles.length; i++) {
            this.roles.push(res.roles[i].roleName);
            if (res.roles[i].roleName === 'Head_Of_Dept') {
              this.getDepUsers(this.userDepts[0].deptId);
            }
          }
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
}
