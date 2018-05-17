import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AppService } from '../app-service.service';
=======
import { AppService } from '../app.service';
>>>>>>> ae0b8eab988b20f95066e31855ca5facdfc5c53e
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
<<<<<<< HEAD
export class HomeComponent implements OnInit {

  title = 'Demo';
=======
export class HomeComponent {
  title = 'E-Learning-Platform';
>>>>>>> ae0b8eab988b20f95066e31855ca5facdfc5c53e
  greeting = {};

  constructor(private app: AppService, private http: HttpClient) {
    http.get('token').subscribe(data => {
      const token = data['token'];
      http.get('http://localhost:8082', {headers : new HttpHeaders().set('X-Auth-Token', token)})
        .subscribe(response => this.greeting = response);
    }, () => {});
  }

  authenticated() {
    return this.app.authenticated;
  }

<<<<<<< HEAD
  ngOnInit() {
  }

  
=======
>>>>>>> ae0b8eab988b20f95066e31855ca5facdfc5c53e
}
