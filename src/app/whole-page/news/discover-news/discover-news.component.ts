import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ApiService} from '../../../api/api.service';

@Component({
  selector: 'app-discover-news',
  templateUrl: './discover-news.component.html',
  styleUrls: ['./discover-news.component.css']
})
export class DiscoverNewsComponent implements OnInit {
  id;
  allNews;
  title;
  description;
  authorId;
  authorEmail;
  authorPhoto;

  constructor(
      // tslint:disable-next-line:variable-name
      private _api: ApiService,
      // tslint:disable-next-line:variable-name
      @Inject(MAT_DIALOG_DATA) public _data: any,
      // tslint:disable-next-line:variable-name
      private _dialog: MatDialogRef<DiscoverNewsComponent>
  ) {
    this.id = _data;
  }

  ngOnInit(): void {
    this.getNewsById(this.id);
  }

  getNewsById(id) {
    this._api.getNews().subscribe(res => {
      this.allNews = res;
      // tslint:disable-next-line:forin
      for (const x of this.allNews) {
        if (x.newsId === this.id) {
        this.title = x.newsTitle;
        this.description = x.bodyTitle;
        this.authorId = x.author.userId;
        this.authorEmail = x.author.email;
        this.authorPhoto = 'https://nir.iitu.kz/' + x.author.photo;
        }
      }
    });
  }

}
