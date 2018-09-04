import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ifAuthenticate = false;
  constructor(private app: AppService) { }

  ngOnInit() {
  }

  authenticated() {
    this.ifAuthenticate = false;
    return this.app.authenticated;
  }

}
