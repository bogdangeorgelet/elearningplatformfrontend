import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  title = 'E-Learning-Platform';
  greeting = {};
  ifAuthenticate = localStorage.getItem('authenticated');
  
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
  
  constructor(private app: AppService, private http: HttpClient) {
    // http.get('http://localhost:8082/resource').subscribe(data => this.greeting = data);
  }

}
