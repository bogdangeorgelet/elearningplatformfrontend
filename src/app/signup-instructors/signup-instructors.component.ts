import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from '../customer/customer.component';
import { CustomerExample } from '../customer-example';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'signup-instructors',
  templateUrl: './signup-instructors.component.html',
  styleUrls: ['./signup-instructors.component.css']
})
export class SignupInstructorsComponent implements OnInit {
  private hostUrl = 'http://localhost:8082/registerInstructor';
  instructor;
  registerInstructor = { id: '', firstName: '', lastName: '', email: '', username: '', password: '', confirmPassword: '' };
  error = false;
  classes;
  errorMessage;
  submitted = false;
  showSuccessMessage = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const url = `${this.hostUrl}`;
    this.http.get(url).subscribe(data => {
      this.instructor = data;
    });
  }

  onSubmit() {
    const url = `${this.hostUrl}/add`;
    this.error = false;
    const body = this.registerInstructor;
    this.http.post(url, body).subscribe(data => {
      this.closeModal();
      this.refreshList();
    },
      err => {
        this.showSuccessMessage = true;
        this.error = true;
        this.errorMessage = err.error.message;
      })
  }

  refreshList() {
    this.http.get(this.hostUrl).subscribe(data => {
      this.instructor = data;
      console.log('refreshList');
    })
  }

  closeModal() {
    this.showSuccessMessage = true;
    this.classes = '';
    this.error = false;

    setTimeout(function(){
      location.reload();
    },1000);
  }

}

// have to add validation, location reload after submit