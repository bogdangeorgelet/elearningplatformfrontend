import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AppService {

  authenticated = false;

  constructor(private router: Router, private http: HttpClient) { }

  logout() {
    localStorage.clear();
    localStorage.setItem('authenticated', "false");
    this.authenticated = false;
    this.router.navigateByUrl('/login');
  }



//   authenticate(credentials, callback) {

        // const headers = new HttpHeaders(credentials ? {
        //     authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        // } : {});

        // this.http.post('http://localhost:8084/login', {headers: headers}).subscribe(response => {
        //     if (response['name']) {
        //         this.authenticated = true;
        //     } else {
        //         this.authenticated = false;
        //     }
        //     return callback && callback();
        // });

    //     console.log('service');

    // }

    // isAuthenticated() {
    //     return this.authenticated;
    // }

}
