import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {AddMemberDialogComponent} from './add-member-dialog/add-member-dialog.component';
import * as jwt_decode from 'jwt-decode';
import {ApiService} from '../../../api/api.service';
import {LanguageService} from '../../../services/language.service';
@Component({
  selector: 'app-add-disset',
  templateUrl: './add-disset.component.html',
  styleUrls: ['./add-disset.component.css']
})
export class AddDissetComponent implements OnInit {
  form: FormGroup;
  public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
  public tokenId = this.DecodedToken.jti;
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
  universities = [];

  constructor(private dialog: MatDialog,
              // tslint:disable-next-line:variable-name
              private _api: ApiService,
              private langService: LanguageService,
              private cd: ChangeDetectorRef) {
    this.form = new FormGroup({
      disInfo: new FormControl('', Validators.required),
      disStartDate: new FormControl('', Validators.required),
      disStopDate: new FormControl('', Validators.required),
      ministryOrder: new FormControl('', Validators.required),
      membersNum: new FormControl('', Validators.required),
      secretaryId: new FormControl(this.tokenId)
    });
  }

  ngOnInit(): void {
    this.langService.currentLanguage.subscribe(
        lang => {
          this.getAllUniversities(lang);
          this.cd.detectChanges();
        }
    );
  }

  getAllUniversities(lang) {
    this._api.getAllUniversites(lang).subscribe(
        res => {
          console.log(res);
          for(let i = 0; i < res.length; i++) {
            let tmp = {
              value: res[i].univer_id,
              viewValue: res[i].univer_name
            }
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
      width: '50%',
    });
    dialogRef.afterClosed().subscribe(
        res => {
          if (typeof  res !== 'undefined' && res !== 'false') {
            const control = res;
            const members = control.value.disMember;
            console.log(members);
            this._api.uploadDisSovet(this.form.value).subscribe(
                disId => {
                  console.log(disId);
                  // tslint:disable-next-line:prefer-for-of
                  for (let i = 0; i < members.length; i++) {
                    this._api.uploadDisMember(disId, members[i]).subscribe(
                        mem => {console.log(mem); },
                        memErr => {console.log(memErr); }
                    );
                  }
                }, err => {
                  console.log(err);
                }
            );
          }
          console.log(res);
        }
    );
  }
}
