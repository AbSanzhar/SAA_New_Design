import {Component, OnInit} from '@angular/core';
import {DataControlService} from '../services/data-control.service';
import {Router} from '@angular/router';
import {ApiService} from '../api/api.service';
import * as jwt_decode from 'jwt-decode';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-whole-page',
  templateUrl: './whole-page.component.html',
  styleUrls: ['./whole-page.component.css']
})
export class WholePageComponent implements OnInit {
  panelOpenState = false;
  isMobile;
  isDesktop;
  isTablet;
  showFiller = false;
  currentUserId: string;
  userRoles = [];
  currentUser;
  name;
  language = 'РУС';
  public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
  public tokenId = this.DecodedToken.jti;
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
              private deviceDetectorService: DeviceDetectorService) {
    this.detectDevice();
  }

  ngOnInit(): void {
    this.detectDevice();
    this._api.getUserById(this.tokenId).subscribe(
      res => {
        this.currentUser = res;
        this.name =  res.lastName + ' ' + res.firstName;
        for (let i = 0; i < res.roles.length; i++) {
          this.userRoles.push(res.roles[i].roleName);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }

  changeLang(language: string) {
    this.language = language;
  }

  detectDevice() {
    this.isMobile = this.deviceDetectorService.isMobile();
    this.isTablet = this.deviceDetectorService.isTablet();
    this.isDesktop = this.deviceDetectorService.isDesktop();
  }

}
