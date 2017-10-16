import { PermissionsComponent } from './../modules/dashboard/permissions/permissions.component';
import { RolesComponent } from './../modules/dashboard/roles/roles.component';
import { RecentSignUpsComponent } from './../modules/dashboard/recent-sign-ups/recent-sign-ups.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { DashboardComponent } from './../modules/dashboard/dashboard/dashboard.component';
import { StaffComponent } from './../modules/dashboard/staff/staff.component';
    
const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'staff',
        component: StaffComponent
    },
    {
        path: 'recent-sign-ups',
        component: RecentSignUpsComponent
    },
    {
        path: 'roles',
        component: RolesComponent
    },
    {
        path: 'permissions',
        component: PermissionsComponent
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class DashboardRouteModule { }