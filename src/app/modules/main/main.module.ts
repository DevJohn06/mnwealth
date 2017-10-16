import { PermissionsComponent } from './../dashboard/permissions/permissions.component';
import { RolesComponent } from './../dashboard/roles/roles.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRouteModule } from './../../routes/app.route';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { MainComponent } from './main.component';
import { AuthRouteModule } from './../../routes/auth.route';
import { SetPasswordComponent } from './../auth/set-password/set-password.component';
import { ForgotPasswordComponent } from './../auth/forgot-password/forgot-password.component';
import { DashboardRouteModule } from './../../routes/dashboard.route';
import { DashboardComponent } from './../dashboard/dashboard/dashboard.component';
import { NavBarComponent } from './../../components/nav-bar/nav-bar.component';
import { SideBarMenuComponent } from './../../components/side-bar-menu/side-bar-menu.component';
import { StaffComponent } from './../dashboard/staff/staff.component';
import { ActivitiesComponent } from './../dashboard/activities/activities.component';
import { RecentSignUpsComponent } from './../dashboard/recent-sign-ups/recent-sign-ups.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRouteModule,
        AuthRouteModule,
        DashboardRouteModule
    ],
    declarations: [
        MainComponent,
        ForgotPasswordComponent,
        SetPasswordComponent,
        DashboardComponent,
        NavBarComponent,
        SideBarMenuComponent,
        StaffComponent,
        ActivitiesComponent,
        RecentSignUpsComponent,
        RolesComponent,
        PermissionsComponent
    ],
    exports: [
        MainComponent
    ]
})
export class MainModule { }
