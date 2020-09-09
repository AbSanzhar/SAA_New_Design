import { Component, OnInit } from '@angular/core';
import {DataControlService} from '../../services/data-control.service';
import {ApiService} from '../../api/api.service';
import {LanguageService} from '../../services/language.service';
import {DeviceDetectorService} from 'ngx-device-detector';

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

  // tslint:disable-next-line:variable-name
  constructor(private _api: ApiService,
              private langService: LanguageService,
              private deviceDetectorService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.langService.currentLanguage.subscribe(lang => {
      this.getAllDissets(lang);
    });
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
