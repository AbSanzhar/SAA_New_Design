import { Component, OnInit } from '@angular/core';
import {DataControlService} from '../services/data-control.service';
import {Router} from '@angular/router';
import {ApiService} from '../api/api.service';
import * as jwt_decode from 'jwt-decode';
import {Validators} from '@angular/forms';
@Component({
  selector: 'app-whole-page',
  templateUrl: './whole-page.component.html',
  styleUrls: ['./whole-page.component.css']
})
export class WholePageComponent implements OnInit {
  showFiller = false;
  currentUserId: string;
  userRoles = [];
  currentUser;
  name;
  public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
  public tokenId = this.DecodedToken.jti;
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  constructor(private service: DataControlService,
              private router: Router,
              // tslint:disable-next-line:variable-name
              private _api: ApiService) {
  }

  ngOnInit(): void {
    this._api.getUserById(this.tokenId).subscribe(
      res => {
        this.currentUser = res;
        this.name =  res.lastName + ' ' + res.firstName; //.charAt(0) + '.' +  res.patronymic.charAt(0) + '.'
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < res.roles.length; i++) {
          this.userRoles.push(res.roles[i].roleName);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }
}
