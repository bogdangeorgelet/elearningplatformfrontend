import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AppService } from '../app-service.service';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
=======
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
>>>>>>> ae0b8eab988b20f95066e31855ca5facdfc5c53e

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  credentials = {username: '', password: ''};

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
  }
  
  login() {
    this.app.authenticate(this.credentials, () => {
      this.router.navigateByUrl('/');
    })
    return false;
  }

}
