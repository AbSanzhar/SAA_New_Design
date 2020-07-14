import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../../api/api.service';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-add-new-ex-member-dialog',
  templateUrl: './add-new-ex-member-dialog.component.html',
  styleUrls: ['./add-new-ex-member-dialog.component.css']
})
export class AddNewExMemberDialogComponent implements OnInit {
    form: FormGroup;
    loading = false;
    color: ThemePalette = 'primary';
    mode: ProgressSpinnerMode = 'determinate';
    value = 0;
  constructor(private service: ApiService) {
    this.form = new FormGroup({
      iin: new FormControl('', Validators.required),
      workPlace: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }
  newUser;
  createNewExUser() {
      this.loading = true;
      this.service.uploadNewUser(this.form.value).subscribe(
          res => {
            console.log(res);
            this.newUser = {
              userId : res.userId,
              firstName: this.form.value.firstName,
              lastName: this.form.value.lastName
            }
            console.log(this.newUser);
          }, error1 => {
            console.log(error1);
          }
      );
      setInterval(() => {
        this.value += 1;
      }, 20);
  }

}
