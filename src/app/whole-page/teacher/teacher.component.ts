import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-teachers',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  publicationForm: FormGroup;
  eventForm: FormGroup;
  selectedValue: string;
  public DecodedToken = this.getDecodedAccessToken(localStorage.getItem('token'));
  public IdToken = this.DecodedToken.jti;


  constructor(private formBuilder: FormBuilder) {
    this.publicationForm = formBuilder.group({
      pubCoAuthor: new FormControl('', Validators.required),
      pubName: new FormControl('', Validators.required),
      pubYear: new FormControl('', Validators.required),
      pubPubName: new FormControl('', Validators.required),
      pubCity: new FormControl('', Validators.required),
      pubPage: new FormControl('', Validators.required),
      pubUrl: new FormControl('', Validators.required),
      pubDoi: new FormControl('', Validators.required),
    });

    this.eventForm = formBuilder.group({
      event_type: new FormControl(''),
      event_role: new FormControl(''),
      event_name: new FormControl('', Validators.required),
      event_city: new FormControl('', Validators.required),
      event_url: new FormControl('', Validators.required),
      event_date: new FormControl('', Validators.required),
      event_file: new FormControl(''),
      event_user_id: this.IdToken
    });
  }

  elements: Sourse[] = [
    {value: 'element-0', viewValue: 'Материалы конференции'},
    {value: 'element-1', viewValue: 'Монография'},
    {value: 'element-2', viewValue: 'Учебник'},
    {value: 'element-3', viewValue: 'Пособие'},
    {value: 'element-4', viewValue: 'Охранный документ'},
    {value: 'element-5', viewValue: 'Периодическое издание'},
  ];

  elements2: Sourse[] = [
    {value: 'element-0', viewValue: 'Конференция'},
    {value: 'element-1', viewValue: 'Форум'},
    {value: 'element-2', viewValue: 'Семинар'},
  ];

  elements3: Sourse[] = [
    {value: 'element-0', viewValue: 'Председатель'},
    {value: 'element-1', viewValue: 'Участник'},
    {value: 'element-2', viewValue: 'Слушатель'},
    {value: 'element-3', viewValue: 'Секретарь/Модератор'},
  ];

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }


  ngOnInit(): void {
  }

}

interface Sourse {
  value: string;
  viewValue: string;
}
