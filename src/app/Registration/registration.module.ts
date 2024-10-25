import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from './registration-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatIconModule} from '@angular/material/icon';
import { RegistrationComponent } from './registration/registration.component';
import {MatDividerModule} from '@angular/material/divider';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationService } from './registration.service';




@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    //RegistrationService,
    HttpClientModule
  ]
})
export class RegistrationModule { }
