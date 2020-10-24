import {Component, OnInit} from '@angular/core';
import {SignInDialogComponent} from './sign-in-dialog/sign-in-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {DeviceDetectorService} from 'ngx-device-detector';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../api/api.service';
import {DataControlService} from '../services/data-control.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error2: any;
  isMobile;
  form: FormGroup;
  isDesktop;
  isTablet;
  inputLogin = '';
  showCardIndex = 2;
  page = 2;
  marginIndex = 0;

  // @Input() arrCard: Project[];

  constructor(public dialog: MatDialog,
              private router: Router,
              private deviceDetectorService: DeviceDetectorService,
              // tslint:disable-next-line:variable-name
              private _api: ApiService,
              private service: DataControlService) {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.detectDevice();
  }

  openDialog() {
    const L = document.getElementsByClassName('text') as HTMLCollectionOf<HTMLElement>;
    L[0].style.opacity = '0';
    const dialogRef = this.dialog.open(SignInDialogComponent, {
      width: '530px',
      data: this.inputLogin,
      backdropClass: 'dialog-content'
    });

    dialogRef.afterClosed().subscribe(result => {
      // tslint:disable-next-line:no-shadowed-variable
      const L = document.getElementsByClassName('text') as HTMLCollectionOf<HTMLElement>;
      L[0].style.opacity = '1';
      console.log(`Dialog result: ${result}`);
    });
  }

  detectDevice() {
    this.isMobile = this.deviceDetectorService.isMobile();
    this.isTablet = this.deviceDetectorService.isTablet();
    this.isDesktop = this.deviceDetectorService.isDesktop();
  }

  signIn() {
    this._api.login(this.form.value).subscribe(res => {
      // console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['/whole']);
    }, error1 => {
      this.error2 = true;
      // alert('Login or password are incorrect!');
      console.log(error1);
    });
  }

}
