import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api/api.service';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  degreeList;
  deptslist = [];
  rolesList = [];

  constructor(private _api: ApiService,
              private router: Router) {}


  userModel: UserViewModel = {
    id: 0,
    degreesList: [],
    deptsList: [],
    rolesList: []
  };
  public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
  public tokenId = this.DecodedToken.jti;

  email: any;

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
  ngOnInit(): void {
    this._api.getUserById(this.tokenId).subscribe(res => {
      console.log(res);
      this.userModel.id = res.userId;
    }, err => {
      console.log(err);
    });

    this._api.getAllDegrees().subscribe(res => {
      console.log(res);
      this.degreeList = res;
    }, error => {
      console.log(error);
    });
    this._api.getAllDepartments().subscribe(res => {
      console.log(res);
      for(const item in res){
        console.log(item, res[item]);
        this.deptslist.push({
          id: item,
          name: res[item]
        });
      }
    }, error => {
      console.log(error);
    });
    this._api.getAllRoles().subscribe(res => {
      for(const item in res){
        console.log(item, res[item]);
        this.rolesList.push({
          id: item,
          name: res[item]
        });
      }
    }, error => {
      console.log(error);
    });
  }

  SkipBtn(): void {
    this.router.navigate(['/whole']);
  }
  SaveBtn(): void {
    const degrees = document.querySelectorAll('.degrees_checkbox');
    const depts = document.querySelectorAll('.depts_checkbox');
    const roles = document.querySelectorAll('.roles_checkbox');
    for(let i = 0; i < degrees.length; i++){
      // @ts-ignore
      if (degrees[i].checked){
        // @ts-ignore
        this.userModel.degreesList.push(degrees[i].value);
      }
    }
    for (let i = 0; i < depts.length; i++){
      // @ts-ignore
      if (depts[i].checked){
        // @ts-ignore
        this.userModel.deptsList.push(depts[i].value);
      }
    }
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < roles.length; i++){
      // @ts-ignore
      if (roles[i].checked){
        // @ts-ignore
        this.userModel.rolesList.push(roles[i].value);
      }
    }
    console.log(this.userModel);
    this._api.registerUser(this.userModel).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }
}


export interface UserViewModel {
  id: number;
  degreesList: [];
  deptsList: [];
  rolesList: [];
}
