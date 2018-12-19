import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Auth } from '../login/auth';

@Component({
  selector: 'register',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private hostUrl = 'http://localhost:8082/registerUser';
  public alerts: any = [];
  user: any;
  auth: Auth;
  registerUser = { id: '', firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
  error = false;
  classes: any;
  errorMessage: String;
  showSuccessMessage = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
    localStorage.setItem('authenticated', 'false');
    const url = 'http://localhost:8082/registerUser';
    this.http.get(url).subscribe(data => {
      this.user = data;
    });
  }

  onSubmit(form: NgForm) {

    this.auth = form.value as Auth;
    
    localStorage.setItem('Authorization', JSON.stringify('Basic ' + btoa(this.auth.username + ':' 
      + this.auth.password)));
    localStorage.setItem('authenticated', 'false');

    const url = `${this.hostUrl}/add`;
    this.error = false;
    const body = this.registerUser;
    this.http.post(url, body).subscribe(data => {
      localStorage.setItem("username", this.auth.username);
      localStorage.setItem("password", this.auth.password);
      this.closeModal();
      this.refreshList();
      this.router.navigateByUrl("/login");
    },
      err => {
        this.warn();
        localStorage.removeItem('authenticated');
        localStorage.removeItem('userIsAdmin');
        localStorage.removeItem('userIsCustomer');
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        this.showSuccessMessage = false;
        this.error = true;
        this.errorMessage = err.message;
      })
  }

  refreshList() {
    this.http.get(this.hostUrl).subscribe(data => {
      this.user = data;
      console.log('refreshList');
    })
  }

  public warn(): void {
    this.alerts.push({
      type: 'danger',
      msg: 'There is something wrong with your details',
      timeout: 3000
    });
  }

  closeAlert() {
    this.error = false;
    location.reload();
  }

  closeModal() {
    this.showSuccessMessage = true;
    this.classes = '';
    this.error = false;

    setTimeout(function(){
      location.reload();
    },1000);
  }


}
