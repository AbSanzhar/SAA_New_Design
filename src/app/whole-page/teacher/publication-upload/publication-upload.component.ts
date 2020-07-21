import { Component, OnInit } from '@angular/core';
import {TeacherComponent} from '../teacher.component';
import * as $ from 'jquery';
@Component({
  selector: 'app-publication-upload',
  templateUrl: './publication-upload.component.html',
  styleUrls: ['./publication-upload.component.css']
})
export class PublicationUploadComponent implements OnInit {
  public selectedPublicationFile: File = null;

  constructor() { }

  ngOnInit(): void {
  }

  onPubFileSelected(event) {
    this.selectedPublicationFile = event.target.files[0] as File;
    console.log(this.selectedPublicationFile);
  }
}
