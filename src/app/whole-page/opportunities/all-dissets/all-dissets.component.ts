import { Component, OnInit } from '@angular/core';
import {DataControlService} from '../../../services/data-control.service';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-all-dissets',
  templateUrl: './all-dissets.component.html',
  styleUrls: ['./all-dissets.component.css']
})
export class AllDissetsComponent implements OnInit {
  isMobile;
  isDesktop;
  isTablet;
  displayedColumns = ['index', 'universityName', 'role', 'specialty', 'activityPeriod', 'orderNumberAndOrder', 'actions'];
  dataSource: any[];

  constructor(private http: DataControlService,
              private deviceDetectorService: DeviceDetectorService) {
    this.detectDevice();
  }

  ngOnInit(): void {
    this.detectDevice();
    this.getAllDissets();
  }

  getAllDissets() {
    this.http.getAllDissets().subscribe(res => {
      this.dataSource = res;
    });
  }

  detectDevice() {
    this.isMobile = this.deviceDetectorService.isMobile();
    this.isTablet = this.deviceDetectorService.isTablet();
    this.isDesktop = this.deviceDetectorService.isDesktop();
  }

}
