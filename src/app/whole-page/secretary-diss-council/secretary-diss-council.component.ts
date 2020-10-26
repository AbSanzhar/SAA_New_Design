import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api/api.service';
import {DeviceDetectorService} from 'ngx-device-detector';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-secretary-diss-council',
  templateUrl: './secretary-diss-council.component.html',
  styleUrls: ['./secretary-diss-council.component.css']
})
export class SecretaryDissCouncilComponent implements OnInit {
  dataSource: any[];
  displayedColumns = ['index', 'universityName', 'actions'];
  isMobile;
  isDesktop;
  isTablet;
  lang: any;

  // tslint:disable-next-line:variable-name
  constructor(private _api: ApiService,
              private translateService: TranslateService,
              private deviceDetectorService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.lang = this.translateService.currentLang;
      this.getAllDissets(this.translateService.currentLang);
      this.translateService.onLangChange.subscribe(
          lang => this.getAllDissets(lang.lang)
      );
    this.detectDevice();
  }

  detectDevice() {
    this.isMobile = this.deviceDetectorService.isMobile();
    this.isTablet = this.deviceDetectorService.isTablet();
    this.isDesktop = this.deviceDetectorService.isDesktop();
  }

  getAllDissets(lang) {
    this._api.getSecDisSovet(lang).subscribe(res => {
      this.dataSource = res;
      console.log(res);
    });
  }

}
