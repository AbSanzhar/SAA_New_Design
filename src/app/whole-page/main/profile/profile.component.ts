import {Component, OnInit} from '@angular/core';
import {DataControlService} from '../../../services/data-control.service';
import {ApiService} from '../../../api/api.service';
import * as jwt_decode from 'jwt-decode';
import {MatDialog} from '@angular/material/dialog';
import {DeviceDetectorService} from 'ngx-device-detector';
import {CookieService} from '../../../services/cookie.service';
import {BehaviorSubject} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentLanguage;
  language;
  isMobile;
  isDesktop;
  isTablet;
  photo;
  from: any = 1900;
  to: any = 2021;
  paginator = {
    length: 0,
    size: 1,
    page: 0,
  };
  public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
  public IdToken = this.DecodedToken.jti;
  private name: any;
  TeacherPublications: any[] = [];
  DepUsers: any[] = [];
  displayedColumns5 = ['id', 'name', 'type', 'priority', 'subPriority', 'subSubPriority', 'executor', 'customer', 'dirFullName', 'dept', 'agrDate', 'registerNumber', 'startDate', 'endDate', 'totalSum'];

  public s = this.getDecodedAccessToken(localStorage.getItem('token'));
  public tokenId = this.s.jti;
  public currentUser;
  public userDepts = [];
  public roles = [];

  pageOfItems: Array<any>;

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  constructor(private http: DataControlService,
              // tslint:disable-next-line:variable-name
              private _api: ApiService,
              // tslint:disable-next-line:variable-name
              private _dialog: MatDialog,
              private translateService: TranslateService,
              private deviceDetectorService: DeviceDetectorService,
              private cookieService: CookieService) {
    if (!this.cookieService.getCookie('language')) {
      this.cookieService.setCookie('language', 'ru', 1);
      this.language = new BehaviorSubject('ru');
      this.currentLanguage = this.language.asObservable();
    } else {
      this.language = new BehaviorSubject(this.cookieService.getCookie('language'));
      this.currentLanguage = this.language.asObservable();
    }
  }

  ngOnInit(): void {
    this.language = this.translateService.currentLang;
    console.log(this.language);
    this._api.getUserById(this.IdToken).subscribe(
        res => {
          console.log(res);
          if (res.patronymic != null) {
            this.name = res.firstName.charAt(0) + '.' + res.patronymic.charAt(0) + '.' + res.lastName;
          } else {
            this.name = res.firstName.charAt(0) + '.' + res.lastName;
          }
          this.photo = res.photo;
          // tslint:disable-next-line:prefer-for-of
        },
        err => {
          console.log(err);
        }
    );
    this._api.getUserById(this.tokenId).subscribe(
        res => {
          this.currentUser = res;
          this.userDepts = res.usersDepts;
          console.log(res);
        },
        err => {
          console.log(err);
        }
    );
    this.detectDevice();
  }

  detectDevice() {
    this.isMobile = this.deviceDetectorService.isMobile();
    this.isTablet = this.deviceDetectorService.isTablet();
    this.isDesktop = this.deviceDetectorService.isDesktop();
  }

  changeLanguage(language) {
    this.language.next(language);
    console.log(language);
    this.cookieService.setCookie('language', language, 1);
  }

}


