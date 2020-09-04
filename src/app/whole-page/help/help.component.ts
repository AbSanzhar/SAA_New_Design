import { Component, OnInit } from '@angular/core';
import {FAQ} from '../../shared/model/FAQ';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  faq: FAQ[] = [
    {id: 1, question: 'Example question', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/faq/bell.svg'},
    {id: 2, question: 'Example question', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/faq/photo.svg'},
    {id: 3, question: 'Example question', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/faq/photo.svg'},
    {id: 4, question: 'Example question', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/faq/bell.svg'},
    {id: 5, question: 'Example question', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/faq/bell.svg'},
    {id: 6, question: 'Example question', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'assets/images/faq/bell.svg'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
