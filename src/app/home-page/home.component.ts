import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  title = 'E-Learning-Platform';
  greeting = {};
  ifAuthenticate: string;
  isOpen = true;

  ngOnInit(): void {
    this.ifAuthenticate = localStorage.getItem('authenticated');
  }
  
  constructor(private app: AppService, private http: HttpClient) {
    // http.get('http://localhost:8082/resource').subscribe(data => this.greeting = data);
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
