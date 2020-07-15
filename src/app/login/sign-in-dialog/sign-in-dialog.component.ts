import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthGuardService} from '../../api/auth-guard';
import {DataControlService} from '../../services/data-control.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ApiService} from '../../api/api.service';

@Component({
    selector: 'app-sign-in-dialog',
    templateUrl: './sign-in-dialog.component.html',
    styleUrls: ['./sign-in-dialog.component.css']
})
export class SignInDialogComponent implements OnInit {

    form: FormGroup;
    error2: any;

    constructor(private router: Router,
                private service: DataControlService,
                private dialog: MatDialogRef<SignInDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data,
                private _api: ApiService) {
        this.form = new FormGroup({
            username: new FormControl(this.data, Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    ngOnInit(): void {
    }

    signIn() {
        this._api.login(this.form.value).subscribe(res => {
            // console.log(res);
            localStorage.setItem('token', res.token);
            this.dialog.close();
            if (res.isNew === true){
                this.router.navigate(['/registration']);
            }else{
                this.router.navigate(['/whole']);
            }
        }, error1 => {
            this.error2 = true;
            // alert('Login or password are incorrect!');
            console.log(error1);
        });
    }

}
