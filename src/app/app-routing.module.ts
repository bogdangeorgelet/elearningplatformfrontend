import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerComponent } from './customer/customer.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { HomeComponent } from './home-page/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'course',
        component: CourseComponent
    },
    {
        path: 'customer',
        component: CustomerComponent
    },
    {
        path: 'instructors',
        component: InstructorsComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'password-reset/new',
        component: ForgotPasswordComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
