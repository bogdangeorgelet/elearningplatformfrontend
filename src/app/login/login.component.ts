import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Route, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Auth } from './auth';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  public alerts: any = [];
  warning : any;
  auth: Auth;
    
  ngOnInit(): void {
    localStorage.clear();
    localStorage.setItem('authenticated', "false");
  }
  
  public routerLinkVariableForgotPassword = '/password-reset/new';

  credentials = {username: '', password: ''};

  constructor(private http: HttpClient, private router: Router) {
  }

  login(form: NgForm){

    this.auth = form.value as Auth;

    localStorage.setItem('Authorization', JSON.stringify('Basic ' + btoa(this.auth.username + ':' + this.auth.password)));

    localStorage.setItem('authenticated', 'false');

    this.http.post('http://localhost:8084/login', {},
      {headers : new HttpHeaders({Authorization : JSON.parse(localStorage.getItem('Authorization'))})})
      .subscribe(resp => {
      localStorage.setItem('authenticated', "true");
      localStorage.setItem("username", this.auth.username);
      localStorage.setItem("password", this.auth.password);
      // if (resp.json().authority == "t") {
      //   localStorage.setItem('userIsAdmin', "true");
      //   this.router.navigate(["/shop/admin"])
      // }else if (resp.json()[0].authority == "f"){
      //   localStorage.setItem('userIsCustomer', "true");
      this.refresh();
      this.router.navigateByUrl('/home');
    }, err => {
        this.warn();
      localStorage.removeItem('authenticated');
      localStorage.removeItem('userIsAdmin');
      localStorage.removeItem('userIsCustomer');
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    });
  }

  refresh(): void {
    window.location.reload();
  }

  public warn(): void {
    this.alerts.push({
      type: 'danger',
      msg: `Wrong credentials! Username and/or Password are incorrect`,
      timeout: 3000
    });
  }
  public success(): void {
    this.alerts.push({
      type: 'success',
      msg: `Your account has been created!`,
      timeout: 3000
    });
  }
  public fail(): void {
    this.alerts.push({
      type: 'danger',
      msg: `Your account was not created!`,
      timeout: 3000
    });
  }


}

@Injectable()
export class AuthGuard implements CanActivate {
constructor(private router: Router) {}

canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  if (localStorage.getItem('authenticated').toString() == 'true') {
    return true;
  } else {
    this.router.navigate(['/home']);
    return false;
  }
}
}


@Injectable()
export class AdminGuard implements CanActivate {
constructor(private router: Router) {}

canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  if (localStorage.getItem('userIsAdmin') != null) {
    return true;
  } else {
    this.router.navigate(['/home']);
    return false;
  }
}
}

