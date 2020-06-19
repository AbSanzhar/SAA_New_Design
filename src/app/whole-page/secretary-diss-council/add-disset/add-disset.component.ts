import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-disset',
  templateUrl: './add-disset.component.html',
  styleUrls: ['./add-disset.component.css']
})
export class AddDissetComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      universityName: new FormControl(''),
      role: new FormControl(''),
      specialty: new FormControl(''),
      activityPeriod: new FormControl(''),
      orderNumberAndDate: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

}
