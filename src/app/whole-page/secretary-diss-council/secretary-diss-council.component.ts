import { Component, OnInit } from '@angular/core';
import {DataControlService} from '../../services/data-control.service';
import {ApiService} from '../../api/api.service';

@Component({
  selector: 'app-secretary-diss-council',
  templateUrl: './secretary-diss-council.component.html',
  styleUrls: ['./secretary-diss-council.component.css']
})
export class SecretaryDissCouncilComponent implements OnInit {
  dataSource: any[];
  displayedColumns = ['index', 'universityName', 'actions'];

  // tslint:disable-next-line:variable-name
  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this.getAllDissets();
  }

  getAllDissets() {
    this._api.getSecDisSovet().subscribe(res => {
      this.dataSource = res;
      console.log(res);
    });
  }

}
