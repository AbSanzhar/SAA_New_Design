import { Component, OnInit } from '@angular/core';
import {DataControlService} from '../../services/data-control.service';

@Component({
  selector: 'app-secretary-diss-council',
  templateUrl: './secretary-diss-council.component.html',
  styleUrls: ['./secretary-diss-council.component.css']
})
export class SecretaryDissCouncilComponent implements OnInit {
  dataSource: any[];
  displayedColumns = ['index', 'universityName', 'actions'];

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
