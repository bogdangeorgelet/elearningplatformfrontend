import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
<<<<<<< HEAD
  authenticated;
  error=false;

  constructor(private router: Router, private app: AppService) {
   }

  ngOnInit() {
    this.authenticated = localStorage.getItem('authenticated');
    console.log(this.authenticated);
    this.ifAuthenticated();
=======
  authenticated = true;
  constructor(private router: Router, private app: AppService) { }
  ifAuthenticate: string;

  ngOnInit(): void {
    this.ifAuthenticate = localStorage.getItem('authenticated');
>>>>>>> f0c253b4128d2464acb86d98b1ad6a81150346da
  }


  logout() {
    localStorage.clear();
    localStorage.setItem('authenticated', "false");
    this.router.navigateByUrl('/login');
  }

<<<<<<< HEAD
  ifAuthenticated() {
    this.authenticated = this.error; 
  }

}


=======
>>>>>>> f0c253b4128d2464acb86d98b1ad6a81150346da

}
