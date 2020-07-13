import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../../api/api.service';

@Component({
  selector: 'app-add-new-ex-member-dialog',
  templateUrl: './add-new-ex-member-dialog.component.html',
  styleUrls: ['./add-new-ex-member-dialog.component.css']
})
export class AddNewExMemberDialogComponent implements OnInit {
    form: FormGroup;

  constructor(private service: ApiService) {
    this.form = new FormGroup({
      IIN: new FormControl('', Validators.required),
      workPlace: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  createNewExUser() {
    this.service.uploadNewUser(this.form.value).subscribe(
        res => {
          console.log(res);
        }, error1 => {
          console.log(error1);
        }
    );
  }

}
