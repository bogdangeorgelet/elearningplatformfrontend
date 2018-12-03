import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  authenticated;
  error=false;

  constructor(private router: Router, private app: AppService) {
   }

  ngOnInit() {
    this.authenticated = localStorage.getItem('authenticated');
    console.log(this.authenticated);
    this.ifAuthenticated();
  }

  logout() {
    localStorage.clear();
    localStorage.setItem('authenticated', "false");
    this.router.navigateByUrl('/login');
  }

  ifAuthenticated() {
    this.authenticated = this.error; 
  }

}



}
