import { Component, OnInit } from '@angular/core';
import {FAQ} from '../../shared/model/FAQ';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  form: FormGroup;

  // faq: FAQ[] = [
  //   {id: 1, question: 'Example question', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/faq/bell.svg'},
  //   {id: 2, question: 'Example question', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/faq/photo.svg'},
  //   {id: 3, question: 'Example question', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/faq/photo.svg'},
  //   {id: 4, question: 'Example question', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/faq/bell.svg'},
  //   {id: 5, question: 'Example question', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/faq/bell.svg'},
  //   {id: 6, question: 'Example question', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/faq/bell.svg'},
  // ];

  constructor() {
    this.form = new FormGroup({
      organizationName: new FormControl('', Validators.required),
      organizationType: new FormControl('', Validators.required),
      bin: new FormControl('', Validators.required),
      contactPerson: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
  }

}
