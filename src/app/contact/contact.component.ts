import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from '../customer/customer.component';
import { CustomerExample } from '../customer-example';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  private hostUrl = 'http://localhost:8082/contactUs';
  customers;
  contactCustomer = {id: '', firstname: '', lastName: '', email: '', country: '' , phoneNumber: '', message: ''};
  error = false;
  errorMessage;
  submitted = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const url = `${this.hostUrl}`;
    this.http.get(url).subscribe(data => {
      this.customers = data;
    });
  }

  onSubmit() {
    const url = `${this.hostUrl}/add`;
    this.error = false;
    const body = this.contactCustomer;
    this.http.post(url, body).subscribe(data => {
      this.refreshList();
<<<<<<< HEAD
=======
      this.submitted = true;
>>>>>>> 6b9d5826669a9b35ea778771f9fc5bde23c483e0
      location.reload();
    },
      err => {
        this.error = true;
        this.errorMessage = err.error.message;
      })
    }

    refreshList() {
      this.http.get(this.hostUrl).subscribe(data => {
        this.customers = data;
        console.log('refreshList');
      })
    }

    closeAlert() {
      this.error = false;
    }

}

// TODO: add a message after submiting, add an error;