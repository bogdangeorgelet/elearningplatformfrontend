import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from '../customer/customer.component';
import { CustomerExample } from '../customer-example';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {

  customer = new CustomerExample('Dan', 'Matei', 'danmatei@gmail.com');
  
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

}
