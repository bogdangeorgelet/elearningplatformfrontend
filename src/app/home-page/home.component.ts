import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  authenticated;
  
  ngOnInit(): void {
    console.log(localStorage.getItem('authenticated'));
  }

  title = 'E-Learning-Platform';
  greeting = {};

  
  constructor(private app: AppService, private http: HttpClient) {
  }

  authenticate() {
    this.authenticated = localStorage.getItem('authenticated');
  }
}
