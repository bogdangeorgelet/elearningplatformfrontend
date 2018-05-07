import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  private hostUrl = 'http://localhost:8082/customer';
  customers;
  classes;
  modalCustomer = {id: '', fullName: '', username: '', password: '', email: '', address: '', phoneNumber: ''};
  error = false;
  errorMessage;
  showEditBox = false;
  showAddBox = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const url = `${this.hostUrl}`;
    this.http.get(url).subscribe(data => {
      this.customers = data;
    })
  }

  openEditBox(customer) {
    this.showEditBox = true;
    this.classes = 'blurred';
    this.modalCustomer.id = customer.id;
    this.modalCustomer.fullName = customer.fullName;
    this.modalCustomer.username = customer.username;
    this.modalCustomer.password = customer.password;
    this.modalCustomer.email = customer.email;
    this.modalCustomer.address = customer.address;
    this.modalCustomer.phoneNumber = customer.phoneNumber;
  }

  openAddBox() {
    this.showAddBox = true;
    this.error = false;
    this.classes = 'blurred';
    this.customers.id = '';
    this.customers.fullName = '';
    this.customers.username = '';
    this.customers.password = '';
    this.customers.email = '';
    this.customers.address = '';
    this.customers.phoneNumber = '';
  }

  closeEditBox() {
    this.showEditBox = false;
    this.classes = '';
  }

  closeAddBox() {
    this.showAddBox = false;
    this.classes = '';
    this.error = false;
  }

  closeAlert() {
    this.error = false;
  }

  addCustomer() {
    const url = `${this.hostUrl}/add`;
    this.error = false;
    const body = this.modalCustomer;
    this.http.post(url, body).subscribe(data => {
      this.closeAddBox();
      this.refreshList();
    },
      err => {
        this.error = true;
        this.errorMessage = err.error.message;
      })
  }

  updateCustomer(id, updatedCustomer) {
    const body = {
      'id': updatedCustomer.id,
      'fullName': updatedCustomer.fullName,
      'username' : updatedCustomer.username,
      'password' : updatedCustomer.password,
      'email' : updatedCustomer.email,
      'address' : updatedCustomer.address,
      'phoneNumber' : updatedCustomer.phoneNumber
    };
    this.http.post(this.hostUrl + '/' + id, body).subscribe(data => {
      this.closeEditBox();
      this.refreshList();
    })
  }

  deleteCustomer(id) {
    this.http.delete(this.hostUrl + '/' + id).subscribe(data => {
      this.closeEditBox();
      this.refreshList();
    })
  }

  deleteCustomerDirectly(id) {
    this.http.delete(this.hostUrl + '/' + id).subscribe(data => {
      this.refreshList();
    })
  }

  refreshList() {
    this.http.get(this.hostUrl).subscribe(data => {
      this.customers = data;
    })
  }

}
