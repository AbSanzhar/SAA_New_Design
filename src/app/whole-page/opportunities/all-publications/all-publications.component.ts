import { Component, OnInit } from '@angular/core';
import {DataControlService} from '../../../services/data-control.service';

@Component({
  selector: 'app-all-publications',
  templateUrl: './all-publications.component.html',
  styleUrls: ['./all-publications.component.css']
})
export class AllPublicationsComponent implements OnInit {
  dataSource: any[];
  displayedColumns = ['index', 'fileName', 'type', 'jointAuthors', 'titlePublication', 'year', 'city', 'publisher', 'actions'];



  constructor(private http: DataControlService) { }

  ngOnInit(): void {
    this.getAllPublications();
  }

  getAllPublications() {
    this.http.getAllPublications().subscribe(res => {
      this.dataSource = res;
    });
  }

}
