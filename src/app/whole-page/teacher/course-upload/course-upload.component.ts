import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-upload',
  templateUrl: './course-upload.component.html',
  styleUrls: ['./course-upload.component.css']
})
export class CourseUploadComponent implements OnInit {

  public selectedCourseFile: File;

  constructor() { }

  ngOnInit(): void {
  }

  onCourseFileSelected(event) {
    this.selectedCourseFile = event.target.files[0] as File;
    console.log(this.selectedCourseFile);
  }

}
