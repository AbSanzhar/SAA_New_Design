import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {WholePageComponent} from "./whole-page/whole-page.component";
import {AuthGuardService} from "./api/auth-guard";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'whole',
    pathMatch: 'full'
  },
  {
    path: 'whole',
    loadChildren: () => import('./whole-page/whole-page.module').then(m => m.WholePageModule),
    canActivate: [AuthGuardService]
  },
  {path: 'login', component: LoginComponent},
  // { path: 'whole', component: WholePageComponent },
  // { path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect to `first-component`
  {path: '**', component: WholePageComponent},  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
