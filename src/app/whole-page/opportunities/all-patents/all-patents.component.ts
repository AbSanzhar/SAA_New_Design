import {Component, OnInit} from '@angular/core';
import {DataControlService} from '../../../services/data-control.service';
import {ApiService} from '../../../api/api.service';
import * as jwt_decode from 'jwt-decode';
import {DeviceDetectorService} from 'ngx-device-detector';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-all-patents',
  templateUrl: './all-patents.component.html',
  styleUrls: ['./all-patents.component.css']
})
export class AllPatentsComponent implements OnInit {
  isMobile;
  isDesktop;
  isTablet;
  displayedColumns2 = ['index', 'patentNumber', 'country', 'inventionPatent', 'author', 'insertedDay', 'issueDate', 'checkedUser', 'status', 'kz', 'ru', 'en', 'actions'];
  dataSource2: any[];
  public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
  public IdToken = this.DecodedToken.jti;
  language;

  constructor(private http: DataControlService,
              // tslint:disable-next-line:variable-name
              private _api: ApiService,
              private deviceDetectorService: DeviceDetectorService,
              private translateService: TranslateService) {
    this.detectDevice();
  }

  ngOnInit(): void {
    this.detectDevice();
    this.language = this.translateService.currentLang;
    this.getAllPatents(this.language);
    this.translateService.onLangChange.subscribe(
        lang => this.getAllPatents(lang.lang)
    );
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  getAllPatents(lang) {
    // tslint:disable-next-line:variable-name
    const science_id = {
      ptnt_user_id: this.IdToken
    };
    this._api.getAllPatents(science_id, lang).subscribe(
        res => {
          console.log(res);
          this.dataSource2 = res;
          for (let i = 0; i < res.length; i++) {
            const year = new Date(res[i].ptntInsertedDate).getFullYear();
            const month = new Date(res[i].ptntInsertedDate).getMonth() < 0 ? '0'
                + (new Date(res[i].ptntInsertedDate).getMonth()
                    + 1) : (new Date(res[i].ptntInsertedDate).getMonth() + 1);
            const day = new Date(res[i].ptntInsertedDate).getDate() < 0 ? '0'
                + new Date(res[i].ptntInsertedDate).getDate() : new Date(res[i].ptntInsertedDate).getDate();
            this.dataSource2[i].ptntInsertedDate = day + '/' + month + '/' + year;

            const year2 = new Date(res[i].ptntIssueDate).getFullYear();
            const month2 = new Date(res[i].ptntIssueDate).getMonth() < 0 ? '0'
                + (new Date(res[i].ptntIssueDate).getMonth()
                    + 1) : (new Date(res[i].ptntIssueDate).getMonth() + 1);
            const day2 = new Date(res[i].ptntIssueDate).getDate() < 0 ? '0'
                + new Date(res[i].ptntIssueDate).getDate() : new Date(res[i].ptntIssueDate).getDate();
            this.dataSource2[i].ptntIssueDate = day2 + '/' + month2 + '/' + year2;
          }
        }, err => {
          console.log(err);
        }
    );
  }

  setPatentStatus(patId, statusId) {
    const status = {
      ptnt_id: patId,
      ptnt_user_id: this.IdToken,
      ptnt_status_id: statusId,
    };

    this._api.setPatentStatus(status).subscribe(
        res => {
          console.log(res);
          this.getAllPatents(this.language);
        },
        err => {
          this.getAllPatents(this.language);
          console.log(err);
        }
    );
  }

  detectDevice() {
    this.isMobile = this.deviceDetectorService.isMobile();
    this.isTablet = this.deviceDetectorService.isTablet();
    this.isDesktop = this.deviceDetectorService.isDesktop();
  }

}
