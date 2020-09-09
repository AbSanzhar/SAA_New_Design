import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  isMobile;
  isDesktop;
  isTablet;
  passwordCheck = false;
  public form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private deviceDetectorService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      currentPassword: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
    this.detectDevice();
  }

  checkPass() {
    if (this.form.get('password').value !== this.form.get('confirmPassword').value){
      // alert('Passwords dont much');
      this.passwordCheck = true;
    }
  }

  detectDevice() {
    this.isMobile = this.deviceDetectorService.isMobile();
    this.isTablet = this.deviceDetectorService.isTablet();
    this.isDesktop = this.deviceDetectorService.isDesktop();
  }

}
