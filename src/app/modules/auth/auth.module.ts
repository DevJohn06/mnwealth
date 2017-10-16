import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRouteModule } from './../../routes/app.route';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SetPasswordComponent } from './set-password/set-password.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouteModule
  ],
  declarations: [
    ForgotPasswordComponent,
    SetPasswordComponent
  ]
})
export class AuthModule { }
