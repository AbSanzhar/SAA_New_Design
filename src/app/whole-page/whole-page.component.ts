import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {DataControlService} from '../services/data-control.service';
import {Router} from '@angular/router';
import {ApiService} from '../api/api.service';
import * as jwt_decode from 'jwt-decode';
import {DeviceDetectorService} from 'ngx-device-detector';
// import {LanguageService} from '../services/language.service';
import {CookieService} from '../services/cookie.service';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-whole-page',
  templateUrl: './whole-page.component.html',
  styleUrls: ['./whole-page.component.css']
})
export class WholePageComponent implements OnInit, AfterViewInit {
  @ViewChild('whole', {static: false})
  public availableLangs = [{
    name: 'EN',
    code: 'en',
  }, {
    name: 'RU',
    code: 'ru',
  }, {
    name: 'KZ',
    code: 'kz',
  }];
  currentLang = this.availableLangs[0];
  panelOpenState = false;
  search: string;
  isMobile;
  isDesktop;
  isTablet;
  photo;
  showFiller = false;
  currentUserId: string;
  userRoles = [];
  currentUser;
  name;
  language;
  public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
  public tokenId = this.DecodedToken.jti;

  // private search: string;

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  constructor(private service: DataControlService,
              private router: Router,
              // tslint:disable-next-line:variable-name
              private _api: ApiService,
              private deviceDetectorService: DeviceDetectorService,
              // private langService: LanguageService,
              private cookieService: CookieService,
              public translate: TranslateService,
              private readonly changeDetectorRef: ChangeDetectorRef) {
    this.detectDevice();
  }

  ngOnInit(): void {
    console.log('SAULEEEE SUPER');
    console.log(this.availableLangs);
    this.detectDevice();
    // if(!this.cookieService.getCookie('language')) {
    //   this.cookieService.setCookie('language', 'ru', 1);
    // } else {
    //   this.language = this.cookieService.getCookie('language');
    // }
    // this.langService.currentLanguage.subscribe(lang => {
    //   this.language = lang;
    //   console.log(this.language);
    // });
    this._api.getUserById(this.tokenId).subscribe(
        res => {
          this.currentUser = res;
          this.name = res.lastName + ' ' + res.firstName;
          for (let i = 0; i < res.roles.length; i++) {
            this.userRoles.push(res.roles[i].roleName);
          }
          this.photo = res.photo;
        },
        err => {
          console.log(err);
        }
    );
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.cookieService.getCookie('language');
    this.router.navigate(['/login']);
  }

  // changeLang(language: string) {
  //   this.langService.changeLanguage(language);
  // }

  detectDevice() {
    this.isMobile = this.deviceDetectorService.isMobile();
    this.isTablet = this.deviceDetectorService.isTablet();
    this.isDesktop = this.deviceDetectorService.isDesktop();
  }

  searching(key: string) {
    // this.router.navigate(['./search'], {queryParams: {this.search}});
  }

  setLang(lng) {
    this.currentLang = lng;
    this.translate.use(lng.code);
    this.translate.currentLang = lng.code;
    console.log('curr lang ', this.currentLang);
    this.changeDetectorRef.markForCheck();
    this.changeDetectorRef.detectChanges();
  }

  ngAfterViewInit(): void {
    this.availableLangs = [{
      name: 'EN',
      code: 'en',
    }, {
      name: 'RU',
      code: 'ru',
    }, {
      name: 'KZ',
      code: 'kz',
    }];
    this.translate.use(this.currentLang.code);
    this.translate.currentLang = this.currentLang.code;
    this.changeDetectorRef.markForCheck();
    this.changeDetectorRef.detectChanges();
    console.log('YAY');
    console.log(this.availableLangs);
  }
}
