import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../api/api.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _api: ApiService,
              private activateRoute: ActivatedRoute,
              private translateService: TranslateService
  ) {
  }

  language;
  lang: any;
  TeacherPublications: any[] = [];
  message = this.activateRoute.snapshot.queryParamMap.get('keyword');
  paginator = {
    length: 0,
    size: 1,
    page: 0,
  };
  displayedColumnsPublication = ['pubId', 'Title', 'pubType', 'Collaborators', 'Year', 'City', 'Publisher', 'Page', 'Url', 'Doi', 'pubStatus', 'File'];

  ngOnInit(): void {
    this.lang = this.translateService.currentLang;
    this.getTeacherPublications(this.lang);
    this.language = this.lang;
    this.getTeacherPublications(this.language);
  }

  getTeacherPublications(lang) {
    const query = '?_page=' + this.paginator.page + '&_limit=' + this.paginator.size;
    this._api.getPublicationsPage(query, lang).subscribe(res => {
      this.TeacherPublications = res;
      console.log(res);
      for (let i = 0; i < res.length; i++) {
        this.TeacherPublications[i].pubYear = new Date(res[i].pubYear).getFullYear();
      }
      // tslint:disable-next-line:only-arrow-functions
      this.TeacherPublications.sort(function(a, b) {
        if (a.pubId > b.pubId) {
          return -1;
        }
        if (b.pubId > a.pubId) {
          return 1;
        }
        return 0;
      });
      this.TeacherPublications = res;
    }, err => {
      console.log(err);
    });
  }

  changeTableList(event) {
    this.paginator.page = event.pageIndex;
    this.paginator.size = event.pageSize;
    this.getTeacherPublications(this.language);
  }

}
