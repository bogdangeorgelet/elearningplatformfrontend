import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerComponent } from './customer/customer.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'app-home',
        pathMatch: 'full'
    },
    {
        path: 'app-home',
        component: HomeComponent
    },
    {
        path: 'app-login',
        component: LoginComponent
    },
    {
        path: 'app-welcome',
        component: WelcomeComponent
    },
    {
        path:'app-course',
        component: CourseComponent
    },
    {
        path: 'app-customer',
        component: CustomerComponent
    },
    {
        path: 'app-instructors',
        component: InstructorsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}