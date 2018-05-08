import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerComponent } from './customer/customer.component';
import { InstructorsComponent } from './instructors/instructors.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'app-welcome',
        pathMatch: 'full'
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