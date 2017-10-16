import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './../modules/main/main.component';
import { LoginComponent } from './../modules/auth/login/login.component';
import { SideBarMenuComponent } from './../components/side-bar-menu/side-bar-menu.component';
import { NavBarComponent } from './../components/nav-bar/nav-bar.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'components/side-bar',
        component: SideBarMenuComponent
    },
    {
        path: 'components/nav-bar',
        component: NavBarComponent
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRouteModule { }