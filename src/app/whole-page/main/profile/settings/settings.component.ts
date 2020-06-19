import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ApiService} from '../../../../api/api.service';
import * as jwt_decode from 'jwt-decode';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  public updateProfileForm: FormGroup;
  public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
  public tokenId = this.DecodedToken.jti;
  constructor(private _api: ApiService,
              private fb: FormBuilder,
              private router: Router) { }

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
      this.updateProfileForm = this.fb.group({
        firstName: [res.firstName, Validators.required],
        lastName: [res.lastName, Validators.required],
        patronymic: [res.patronymic, Validators.required],
        email: [res.email, Validators.required]
      });
    }, err => {
        console.log(err);
    });
  }
  updateProfile() {
    this._api.updateProfile(this.updateProfileForm.value).subscribe(res => {
      console.log(res);
    },
      err => {
      console.log(err);
    });
  }
}
