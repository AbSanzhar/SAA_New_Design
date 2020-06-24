import { Component, OnInit } from '@angular/core';
import {DataControlService} from "../services/data-control.service";
import {Router} from "@angular/router";
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
              private _api: ApiService) {
  }

  ngOnInit(): void {
    this._api.getUserById(this.tokenId).subscribe(
      res => {
        this.currentUser = res;
        this.name = res.username;
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