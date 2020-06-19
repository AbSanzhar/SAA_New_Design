import { Component, OnInit } from '@angular/core';
import {DataControlService} from '../../../services/data-control.service';


@Component({
  selector: 'app-all-patents',
  templateUrl: './all-patents.component.html',
  styleUrls: ['./all-patents.component.css']
})
export class AllPatentsComponent implements OnInit {
  displayedColumns = ['index', 'patentNumber', 'country', 'inventionPatent', 'author', 'date', 'kz', 'ru', 'actions'];
  dataSource: any[];

  constructor(private http: DataControlService) { }

  ngOnInit(): void {
    this.getAllPatents();
  }

  getAllPatents() {
    this.http.getAllPatents().subscribe(res => {
      this.dataSource = res;
    });
  }

}
