import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {AddMemberDialogComponent} from './add-member-dialog/add-member-dialog.component';
import * as jwt_decode from 'jwt-decode';
import {ApiService} from '../../../api/api.service';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
    selector: 'app-add-disset',
    templateUrl: './add-disset.component.html',
    styleUrls: ['./add-disset.component.css']
})
export class AddDissetComponent implements OnInit {
    private lang: any;
    isMobile;
    width;

    constructor(private dialog: MatDialog,
                // tslint:disable-next-line:variable-name
                private _api: ApiService,
                private translateService: TranslateService,
                private cd: ChangeDetectorRef,
                private router: Router,
                private deviceDetectorService: DeviceDetectorService) {
        this.form = new FormGroup({
            universityId: new FormControl('', Validators.required),
            disStartDate: new FormControl('', Validators.required),
            disStopDate: new FormControl('', Validators.required),
            ministryOrder: new FormControl('', Validators.required),
            membersNum: new FormControl('', Validators.required),
            secretaryId: new FormControl(this.tokenId)
        });
        this.isMobile = this.deviceDetectorService.isMobile();
        if (!this.isMobile) {
            this.width = '50%';
        }
        else {
            this.width  = '100%';
        }
    }

    form: FormGroup;
    public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
    public tokenId = this.DecodedToken.jti;
    universities = [];

    getDecodedAccessToken(token: string): any {
        try {
            return jwt_decode(token);
        } catch (Error) {
            return null;
        }
    }

    ngOnInit(): void {
        this.lang = this.translateService.currentLang;
        this.getAllUniversities(this.lang);
        this.cd.detectChanges();
    }

    getAllUniversities(lang) {
        this._api.getAllUniversites(lang).subscribe(
            res => {
                console.log(res);
                for (let i = 0; i < res.length; i++) {
                    let tmp = {
                        value: res[i].univer_id,
                        viewValue: res[i].univer_name
                    };
                    this.universities[i] = tmp;
                }
            }, err => {
                console.log(err);
            }
        );
        this.cd.detectChanges();
    }

    add(): void {
        const dialogRef = this.dialog.open(AddMemberDialogComponent, {
            width: this.width
        });
        dialogRef.afterClosed().subscribe(
            res => {
                console.log("TESTTTTTTT")
                if (typeof res !== 'undefined' && res !== 'false') {
                    const control = res;
                    console.log("RESUUULT")
                    console.log(res);
                    const members = control.value.disMember;
                    console.log(members);
                    this._api.uploadDisSovet(this.form.value).subscribe(
                        disId => {
                            console.log(disId);
                            // tslint:disable-next-line:prefer-for-of
                            for (let i = 0; i < members.length; i++) {
                                members[i].disId = disId;
                                // console.log(members[i]);
                                this._api.uploadDisMember(disId, members[i]).subscribe(
                                    mem => {
                                        console.log("MEM");
                                        console.log(mem);
                                        console.log("MEM TEST");
                                    },
                                    memErr => {
                                        console.log(memErr);
                                    }
                                );
                            }
                        }, err => {
                            console.log(err);
                        }
                    );
                }
                // console.log(res);
                this.form.reset();
                this.router.navigateByUrl('whole/secretary-of-the-diss-council');
            });
    }

    test() {
        this.router.navigateByUrl('whole/secretary-of-the-diss-council');
    }
}
