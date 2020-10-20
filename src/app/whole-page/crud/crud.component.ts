import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api/api.service';
import {MatDialog} from '@angular/material/dialog';
import {UpdateNewsComponent} from './update-news/update-news.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  news;

  constructor(
      // tslint:disable-next-line:variable-name
      private _api: ApiService,
      // tslint:disable-next-line:variable-name
      private _dialog: MatDialog
  ) {
  }

  displayedColumnsNews = ['newsId', 'newsTitle', 'bodyTitle', 'date', 'authorId', 'authorEmail', 'action'];

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews() {
    this._api.getNews().subscribe(res => {
      this.news = res;
    });
  }

  update(tableData) {
    this._dialog.open(UpdateNewsComponent, {
      data: tableData,
      width: '700px'
    }).afterClosed().subscribe(res => {
      console.log(res);
      if (typeof res !== 'undefined' && res !== 'false') {
        this._api.updateNews(res.newsId, res).subscribe(result => {
          this.getAllNews();
        }, error => {
          console.log(error);
        });
      }
    });
  }

  delete(newsId: string) {
    this._api.deleteNews(newsId).subscribe(res => {
      this.getAllNews();
    });
  }
}
