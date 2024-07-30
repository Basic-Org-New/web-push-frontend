import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GoogleSignInComponent } from './google-sign-in/google-sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonSharedModule } from '../common/common.module';
import { PhoneInputComponent } from '../phone-input/phone-input.component';
import { RequestResetPasswordComponent } from './request-reset-password/request-reset-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    GoogleSignInComponent,
    PhoneInputComponent,
    RequestResetPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonSharedModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
