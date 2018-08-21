import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'signup-instructors',
  templateUrl: './signup-instructors.component.html',
  styleUrls: ['./signup-instructors.component.css']
})
export class SignupInstructorsComponent implements OnInit {
  private hostUrl = 'http://localhost:8082/registerInstructor';
  instructors;
  registerInstructor = {id: '', firstName: '', lastName: '', email: '', username: '', password: '', confirmPassword: ''};
  error = false;
  classes;
  errorMessage;
  submitted = false;
  showSuccessMessage = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const url = `${this.hostUrl}`;
    this.http.get(url).subscribe(data => {
      this.instructors = data;
    });
  }

  onSubmit() {
    const url = `${this.hostUrl}/add`;
    this.error = false;
    const body = this.registerInstructor;
    this.http.post(url, body).subscribe(data => {
      console.log(data);
    },
      err => {
        this.showSuccessMessage = true;
        this.error = true;
        this.errorMessage = err.error.message;
      })
  }

}
