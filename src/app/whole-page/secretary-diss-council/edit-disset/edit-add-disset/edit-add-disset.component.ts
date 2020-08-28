import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Form} from 'docx/build/file/drawing/inline/graphic/graphic-data/pic/shape-properties/form';
import {ApiService} from '../../../../api/api.service';
import {LanguageService} from '../../../../services/language.service';

@Component({
  selector: 'app-edit-add-disset',
  templateUrl: './edit-add-disset.component.html',
  styleUrls: ['./edit-add-disset.component.css']
})
export class EditAddDissetComponent implements OnInit {

  idDisset: number;
  form: FormGroup;
  selectedValue;
  members;
  exUsers;
  notChoosenOwnUsers;
  notChoosenExUsers;
  elements: Sourse[] = [
    // {value: 'Внутренний сотрудник', viewValue: 'Внутренний сотрудник'},
    // {value: 'Внешний сотрудник', viewValue: 'Внешний сотрудник'}
  ];

  elements2: Sourse[] = [
    // {value: 'Председатель совета', viewValue: 'Председатель'},
    // {value: 'Член совета', viewValue: 'Член'}
  ];
  constructor(private route: ActivatedRoute,
              private service: ApiService,
              private langService: LanguageService) {
    this.form = new FormGroup({
      disMemberTypeId: new FormControl('', Validators.required),
      academicDegree: new FormControl('', Validators.required),
      specCode: new FormControl('', Validators.required),
      disSpecCode: new FormControl('', Validators.required),
      workPlace: new FormControl('', Validators.required),
      disPositionId: new FormControl('', Validators.required),
      disId: new FormControl(''),
      userId: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      // tslint:disable-next-line:radix
      this.idDisset = parseInt(param.id);
    });
    this.langService.currentLanguage.subscribe(lang => {
      this.getDisPositions(lang);
      this.getDisMemberTypes(lang);
    });
    this.getMembers();
    this.getExUsers();
  }

  getMembers() {
    this.service.getOwnUsers().subscribe(res => {
      this.members = res;
      console.log(res);
    }, error1 => {
      console.log(error1);
    });
  }

  getExUsers() {
    this.service.getExUsers().subscribe(
        res => {
          console.log(res);
          this.exUsers = res;
        }, err => {
          console.log(err);
        }
    );
  }

  addToExitingDisSovet() {
    this.service.addToExistedDisMem(this.form.value, this.idDisset).subscribe(
        res => {
          console.log(res);
        }, err => {
          console.log(err);
        }
    );
  }

  getDisPositions(lang) {
    this.service.getDisPositions(lang).subscribe(
        res => {
          console.log(res);
          for(let i = 0; i < res.length; i++) {
            const temp = {
              viewValue: res[i].univer_name,
              value: res[i].univer_id
            }
            this.elements2[i] = temp;
          }
        }, err => {
          console.log(err);
        }
    );
  }

  getDisMemberTypes(lang) {
    this.service.getDisMemberType(lang).subscribe(
        res => {
          console.log(res);
          for(let i = 0; i < res.length; i++) {
            const temp = {
              viewValue: res[i].type_name,
              value: res[i].type_id
            }
            this.elements[i] = temp;
          }
        }, err => {
          console.log(err);
        }
    );
  }


}
interface Sourse {
  value: string;
  viewValue: string;
}
