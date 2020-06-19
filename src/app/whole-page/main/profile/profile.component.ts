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
  displayedColumns = ['No', 'File', 'Type', 'Collaborators', 'Title'];
  public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
  public tokenId = this.DecodedToken.jti;
  public currentUser;
  public userDepts = [ ];
  public roles = [];
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
}


