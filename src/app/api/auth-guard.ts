import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiService } from './api.service';
import {DataControlService} from '../services/data-control.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private apiService: ApiService, private router: Router, private http: DataControlService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  // login(data) {
  //   let user: any[];
  //   let status = false;
  //
  //  this.http.getUserLogin(data).subscribe(res => {
  //     user = res;
  //     if(user) {
  //       localStorage.setItem('user', user[0].username);
  //       status = true;
  //       console.log(status);
  //     }
  //   })
  //
  //   console.log('Errorrr ' + status)
  //   return status;
  // }
}
