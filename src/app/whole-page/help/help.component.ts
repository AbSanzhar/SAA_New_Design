import { Component, OnInit } from '@angular/core';
import {FAQ} from '../../shared/model/FAQ';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../api/api.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  form: FormGroup;

  constructor(private service: ApiService) {
    this.form = new FormGroup({
      orderCompanyName: new FormControl('', Validators.required),
      orderCompanyType: new FormControl('', Validators.required),
      orderCompanyBin: new FormControl('', Validators.required),
      orderContactName: new FormControl('', Validators.required),
      orderContactPhone: new FormControl('', Validators.required),
      orderContactEmail: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  sendOrderCompany() {
    this.service.uploadOrderCompany(this.form.value).subscribe(
        res => console.log(res),
        err => console.log(err)
    );
    this.form.reset();
  }

  ngOnInit(): void {
  }

}
