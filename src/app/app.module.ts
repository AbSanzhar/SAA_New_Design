import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WholePageComponent } from './whole-page/whole-page.component';
import { ProfileComponent } from './whole-page/main/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {PasswordComponent} from './whole-page/main/profile/password/password.component';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {SettingsComponent} from './whole-page/main/profile/settings/settings.component';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SignInDialogComponent } from './login/sign-in-dialog/sign-in-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatPaginatorModule} from '@angular/material/paginator';
import {PatentUploadComponent} from './whole-page/teacher/patent-upload/patent-upload.component';
import {EventUploadComponent} from './whole-page/teacher/event-upload/event-upload.component';
import {PublicationUploadComponent} from './whole-page/teacher/publication-upload/publication-upload.component';
import {MatDividerModule} from '@angular/material/divider';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WholePageComponent,
    ProfileComponent,
    PasswordComponent,
    SettingsComponent,
    SignInDialogComponent,
    PatentUploadComponent,
    EventUploadComponent,
    PublicationUploadComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatTabsModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientModule,
        MatDialogModule,
        MatSelectModule,
        MatBadgeModule,
        MatSidenavModule,
        MatTableModule,
        MatButtonToggleModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        _MatMenuDirectivesModule,
        MatMenuModule,
        FormsModule,
        MatPaginatorModule,
        MatDividerModule,
        FlexLayoutModule,
        MatListModule,
        MatExpansionModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
