import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  isMobile;
  isDesktop;
  isTablet;

  constructor(private deviceDetectorService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.detectDevice();
  }

  detectDevice() {
    this.isMobile = this.deviceDetectorService.isMobile();
    this.isTablet = this.deviceDetectorService.isTablet();
    this.isDesktop = this.deviceDetectorService.isDesktop();
  }

}
