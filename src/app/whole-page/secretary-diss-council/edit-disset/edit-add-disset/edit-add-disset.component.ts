import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-add-disset',
  templateUrl: './edit-add-disset.component.html',
  styleUrls: ['./edit-add-disset.component.css']
})
export class EditAddDissetComponent implements OnInit {

  idDisset: number;
  form: FormGroup;

  constructor(private route: ActivatedRoute) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      role: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.idDisset = parseInt(param.id);
    });
  }

}
