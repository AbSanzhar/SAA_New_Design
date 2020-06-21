import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ApiService} from '../../../../api/api.service';
import * as jwt_decode from 'jwt-decode';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    constructor(private _api: ApiService,
                private fb: FormBuilder,
                private _snackBar: MatSnackBar) {
    }
    public updateProfileForm: FormGroup;
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
        this.updateProfileForm = this.fb.group({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            patronymic: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required)
        });
        this._api.getUserById(this.tokenId).subscribe(res => {
            console.log(res);
            this.updateProfileForm = this.fb.group({
                firstName: new FormControl(res.firstName, Validators.required),
                lastName: new FormControl(res.lastName, Validators.required),
                patronymic: new FormControl(res.patronymic, Validators.required),
                email: new FormControl(res.email, Validators.required)
            });
        }, err => {
            console.log(err);
        });
    }

    updateProfile(message: string, action: string) {
        this._api.updateProfile(this.updateProfileForm.value).subscribe(res => {
                console.log(res);
            },
            err => {
                console.log(err);
            });
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }


}
