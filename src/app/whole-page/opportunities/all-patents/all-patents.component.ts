import { Component, OnInit } from '@angular/core';
import {DataControlService} from '../../../services/data-control.service';
import {ApiService} from '../../../api/api.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-all-patents',
  templateUrl: './all-patents.component.html',
  styleUrls: ['./all-patents.component.css']
})
export class AllPatentsComponent implements OnInit {
  displayedColumns = ['index', 'patentNumber', 'country', 'inventionPatent', 'author', 'insertedDay', 'issueDate', 'kz', 'ru', 'en', 'actions', 'checkedUser', 'status'];
  dataSource: any[];
  public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
  public IdToken = this.DecodedToken.jti;

  constructor(private http: DataControlService,
              private _api: ApiService) { }

  ngOnInit(): void {
    this.getAllPatents();
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
  getAllPatents() {
    const science_id = {
      ptnt_user_id: this.IdToken
    };
    this._api.getAllPatents(science_id).subscribe(
        res => {
          console.log(res);
          this.dataSource = res;
          for(let i = 0; i < res.length; i++) {
            let year = new Date(res[i].ptntInsertedDate).getFullYear();
            let month = new Date(res[i].ptntInsertedDate).getMonth() < 0 ? '0' + (new Date(res[i].ptntInsertedDate).getMonth() + 1) : (new Date(res[i].ptntInsertedDate).getMonth() + 1);
            let day = new Date(res[i].ptntInsertedDate).getDate() < 0 ? '0' + new Date(res[i].ptntInsertedDate).getDate() : new Date(res[i].ptntInsertedDate).getDate();
            this.dataSource[i].ptntInsertedDate = day + '/' + month + '/' + year;

            let year2 = new Date(res[i].ptntIssueDate).getFullYear();
            let month2 = new Date(res[i].ptntIssueDate).getMonth() < 0 ? '0' + (new Date(res[i].ptntIssueDate).getMonth() + 1) : (new Date(res[i].ptntIssueDate).getMonth() + 1);
            let day2 = new Date(res[i].ptntIssueDate).getDate() < 0 ? '0' + new Date(res[i].ptntIssueDate).getDate() : new Date(res[i].ptntIssueDate).getDate();
            this.dataSource[i].ptntIssueDate = day2 + '/' + month2 + '/' + year2;
          }
        }, err => {
          console.log(err);
        }
    );
  }

}
