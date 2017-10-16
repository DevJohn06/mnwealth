import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { ForgotPasswordComponent } from './../modules/auth/forgot-password/forgot-password.component';
import { SetPasswordComponent } from './../modules/auth/set-password/set-password.component';
import { LoginComponent } from '../modules/auth/login/login.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'set-password',
        component: SetPasswordComponent
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AuthRouteModule { }