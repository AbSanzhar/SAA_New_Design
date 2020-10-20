import {Component, OnInit} from '@angular/core';
import {News} from '../../shared/model/News';
import {DeviceDetectorService} from 'ngx-device-detector';
import {ApiService} from '../../api/api.service';
import {MatDialog} from '@angular/material/dialog';
import {DiscoverNewsComponent} from './discover-news/discover-news.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
    isMobile;
    isDesktop;
    isTablet;
    allNews: any;

  news: News[] = [
      {id: 1, title: 'Заголовок Статьи', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/news/news1.png', url: '#'},
      {id: 2, title: 'Заголовок Статьи', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/news/news2.png', url: '#'},
      {id: 3, title: 'Заголовок Статьи', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/news/news3.png', url: '#'},
      {id: 4, title: 'Заголовок Статьи', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/news/news4.png', url: '#'},
      {id: 5, title: 'Заголовок Статьи', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/news/news5.png', url: '#'},
      {id: 6, title: 'Заголовок Статьи', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/news/news6.png', url: '#'}
      ];


  constructor(
      private deviceDetectorService: DeviceDetectorService,
      // tslint:disable-next-line:variable-name
      private _api: ApiService,
      // tslint:disable-next-line:variable-name
      private _dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
      this.detectDevice();
      this.getAllNews();
  }

    detectDevice() {
        this.isMobile = this.deviceDetectorService.isMobile();
        this.isTablet = this.deviceDetectorService.isTablet();
        this.isDesktop = this.deviceDetectorService.isDesktop();
    }

    getAllNews() {
      this._api.getNews().subscribe(res => {
          this.allNews = res;
          console.log('RESUUULT');
          console.log(res);
      });
    }

    openNewsDialog(id) {
        this._dialog.open(DiscoverNewsComponent, {
            width: '50%',
            data: id
        });
    }
}
