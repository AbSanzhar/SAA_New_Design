import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-upload',
  templateUrl: './event-upload.component.html',
  styleUrls: ['./event-upload.component.css']
})
export class EventUploadComponent implements OnInit {
  public selectedEventFile: File;

  constructor() { }

  ngOnInit(): void {
  }

  onEventFileSelected(event) {
    this.selectedEventFile = event.target.files[0] as File;
    console.log(this.selectedEventFile);
  }

}
