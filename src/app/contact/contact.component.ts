import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from '../customer/customer.component';
import { CustomerExample } from '../customer-example';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  private hostUrl = 'http://localhost:8082';
  // user = new CustomerExample('Dan', 'Matei', 'danmatei@gmail.com');
  user = {id: '', firstname: '', lastname: '', user: ''};
  error = false;

  constructor(private http: HttpClient) {}

  submitted = false;

  onSubmit() {
    const url = `${this.hostUrl}/form/add`;
    this.error = false;
    const body = this.user;
    this.http.post(url, body).subscribe(data=> {
      this.submitted = true;
    },err => {
      this.error = true;
    });
  }

}
