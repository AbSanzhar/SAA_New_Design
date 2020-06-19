import { Component, OnInit } from '@angular/core';
import {DataControlService} from '../../../services/data-control.service';

@Component({
  selector: 'app-all-dissets',
  templateUrl: './all-dissets.component.html',
  styleUrls: ['./all-dissets.component.css']
})
export class AllDissetsComponent implements OnInit {
  displayedColumns = ['index', 'universityName', 'role', 'specialty', 'activityPeriod', 'orderNumberAndOrder', 'actions'];
  dataSource: any[];

  constructor(private http: DataControlService) { }

  ngOnInit(): void {
    this.getAllDissets();
  }

  getAllDissets() {
    this.http.getAllDissets().subscribe(res => {
      this.dataSource = res;
    });
  }

}
