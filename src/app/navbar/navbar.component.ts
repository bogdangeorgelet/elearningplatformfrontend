import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  authenticated = true;
  constructor(private router: Router, private app: AppService) { }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    localStorage.setItem('authenticated', "false");
    this.authenticated = false;
    this.router.navigateByUrl('/login');
  }

  // authenticated() {
  //   this.ifAuthenticate = false;
  //   return this.app.authenticated;
  // }

}
