import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patent-upload',
  templateUrl: './patent-upload.component.html',
  styleUrls: ['./patent-upload.component.css']
})
export class PatentUploadComponent implements OnInit {
  public PatentFileRu: any;
  public PatentFileKz: any;
  public PatentFileEn: any;

  constructor() { }

  ngOnInit(): void {
  }

  onRUPatentFileChange(event) {
    console.log(event);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
    }
    this.PatentFileRu = event.target.files[0];
  }

  onKZPatentFileChange(event) {
    console.log(event);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
    }
    this.PatentFileKz = event.target.files[0];
  }

  onENPatentFileChange(event) {
    console.log(event);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
    }
    this.PatentFileEn = event.target.files[0];
  }

}
