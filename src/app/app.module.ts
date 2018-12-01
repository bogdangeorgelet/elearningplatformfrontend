import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CourseComponent } from './course/course.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerComponent } from './customer/customer.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { AppService } from './app.service';
import { LoginComponent, AuthGuard, AdminGuard } from './login/login.component';
import { HomeComponent } from './home-page/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { SignupInstructorsComponent } from './signup-instructors/signup-instructors.component';
import { PasswordValidation } from './password-validation';
import { AlertModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    WelcomeComponent,
    CustomerComponent,
    InstructorsComponent,
    WelcomeComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    FooterComponent,
    SignupInstructorsComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [AppService, AppComponent,PasswordValidation, AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
