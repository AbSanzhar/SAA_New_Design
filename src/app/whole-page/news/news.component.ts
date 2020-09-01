import {Component, OnInit} from '@angular/core';
import {News} from '../../shared/model/News';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
    isMobile;
    isDesktop;
    isTablet;

  news: News[] = [
      {id: 1, title: 'Заголовок Статьи', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/news/news1.png', url: '#'},
      {id: 2, title: 'Заголовок Статьи', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/news/news2.png', url: '#'},
      {id: 3, title: 'Заголовок Статьи', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/news/news3.png', url: '#'},
      {id: 4, title: 'Заголовок Статьи', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/news/news4.png', url: '#'},
      {id: 5, title: 'Заголовок Статьи', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/news/news5.png', url: '#'},
      {id: 6, title: 'Заголовок Статьи', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/news/news6.png', url: '#'}
      ];


  constructor(private deviceDetectorService: DeviceDetectorService) {
  }

  ngOnInit(): void {
      this.detectDevice();
  }

    detectDevice() {
        this.isMobile = this.deviceDetectorService.isMobile();
        this.isTablet = this.deviceDetectorService.isTablet();
        this.isDesktop = this.deviceDetectorService.isDesktop();
    }

}
