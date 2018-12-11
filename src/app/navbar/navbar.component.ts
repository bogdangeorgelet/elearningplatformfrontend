import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private app: AppService) { }
  ifAuthenticate: string;

  ngOnInit(): void {
    this.ifAuthenticate = localStorage.getItem('authenticated');
  }


  logout() {
    localStorage.clear();
    localStorage.setItem('authenticated', "false");
    window.location.reload();
    this.router.navigateByUrl('/login');
  }
}
