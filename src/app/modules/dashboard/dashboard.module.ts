import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { AppRouteModule } from './../../routes/app.route';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecentSignUpsComponent } from './recent-sign-ups/recent-sign-ups.component';
import { StaffComponent } from './staff/staff.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { RolesComponent } from './roles/roles.component';
import { RolesPermissionsComponent } from './roles-permissions/roles-permissions.component';
import { ActivitiesComponent } from './activities/activities.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRouteModule
    ],
    declarations: [
    DashboardComponent,
    RecentSignUpsComponent,
    StaffComponent,
    PermissionsComponent,
    RolesComponent,
    RolesPermissionsComponent,
    ActivitiesComponent],
    exports: [
    ]
})

export class MainModule { }
