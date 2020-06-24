import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YearPlanComponent} from './year-plan/year-plan.component';
import {OpportunitiesComponent} from './opportunities/opportunities.component';
import {RouterModule, Routes} from '@angular/router';
import {WholePageComponent} from './whole-page.component';
import {ProfileComponent} from './main/profile/profile.component';
import {PasswordComponent} from './main/profile/password/password.component';
import {SettingsComponent} from './main/profile/settings/settings.component';
import {EditEmployeeDialogComponent} from './opportunities/edit-employee-dialog/edit-employee-dialog.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {AllPatentsComponent} from './opportunities/all-patents/all-patents.component';
import {AllPublicationsComponent} from './opportunities/all-publications/all-publications.component';
import {AllDissetsComponent} from './opportunities/all-dissets/all-dissets.component';
import {SecretaryDissCouncilComponent} from './secretary-diss-council/secretary-diss-council.component';
import {AddDissetComponent} from './secretary-diss-council/add-disset/add-disset.component';
import {EditAddDissetComponent} from './secretary-diss-council/edit-disset/edit-add-disset/edit-add-disset.component';
import {DialogEditRoleComponent} from './secretary-diss-council/dialog-edit-role/dialog-edit-role.component';
import {MatSelectModule} from '@angular/material/select';
import {EditDissetComponent} from './secretary-diss-council/edit-disset/edit-disset.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {TeacherComponent} from './teacher/teacher.component';

const r: Routes = [
    {
        path: '',
        component: WholePageComponent,
    children: [
      {path: '', component: ProfileComponent},
        {path: 'opportunities', component: OpportunitiesComponent},
        {path: 'yearPlan', component: YearPlanComponent},
        {path: 'password', component: PasswordComponent},
        {path: 'settings', component: SettingsComponent},
        {path: 'opportunities/all-patents', component: AllPatentsComponent},
        {path: 'opportunities/all-publications', component: AllPublicationsComponent},
        {path: 'opportunities/all-dissets', component: AllDissetsComponent},
        {path: 'secretary-of-the-diss-council', component: SecretaryDissCouncilComponent},
        {path: 'secretary-of-the-diss-council/add-disset', component: AddDissetComponent},
        {path: 'secretary-of-the-diss-council/edit-disset/:id', component: EditDissetComponent},
        {path: 'secretary-of-the-diss-council/edit-disset/:id/add-account', component: EditAddDissetComponent},
        {path: 'teacher', component: TeacherComponent}
    ]
  }
];


@NgModule({
  declarations: [
      OpportunitiesComponent,
      YearPlanComponent,
      EditEmployeeDialogComponent,
      AllPatentsComponent,
      AllPublicationsComponent,
      AllDissetsComponent,
      SecretaryDissCouncilComponent,
      AddDissetComponent,
      EditDissetComponent,
      EditAddDissetComponent,
      DialogEditRoleComponent,
      TeacherComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(r),
        MatTableModule,
        MatIconModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatButtonModule,
        HttpClientModule,
        MatDialogModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatSortModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatCardModule
    ],
})
export class WholePageModule { }