import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ApiService} from '../../../../api/api.service';
import * as jwt_decode from 'jwt-decode';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    isMobile;
    isDesktop;
    isTablet;

    // tslint:disable-next-line:variable-name
    constructor(private _api: ApiService,
                private fb: FormBuilder,
                // tslint:disable-next-line:variable-name
                private _snackBar: MatSnackBar,
                private deviceDetectorService: DeviceDetectorService) {
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
        this.detectDevice();
        this.updateProfileForm = this.fb.group({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            patronymic: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            // gender: new FormControl('', Validators.required),
            phoneNumber: new FormControl('', Validators.required)
        });
        this._api.getUserById(this.tokenId).subscribe(res => {
            console.log(res);
            this.updateProfileForm = this.fb.group({
                firstName: new FormControl(res.firstName, Validators.required),
                lastName: new FormControl(res.lastName, Validators.required),
                patronymic: new FormControl(res.patronymic, Validators.required),
                email: new FormControl(res.email, Validators.required),
                // gender: new FormControl(res.gender, Validators.required),
                phoneNumber: new FormControl(res.phoneNumber, Validators.required)
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

    detectDevice() {
        this.isMobile = this.deviceDetectorService.isMobile();
        this.isTablet = this.deviceDetectorService.isTablet();
        this.isDesktop = this.deviceDetectorService.isDesktop();
    }

}
