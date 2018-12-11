import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'register',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private hostUrl = 'http://localhost:8082/registerUser';
  user;
  registerUser = { id: '', firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
  error = false;
  classes;
  errorMessage;
  showSuccessMessage = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // const url = 'http://localhost:8082/registerUser';
    // this.http.get(url).subscribe(data => {
    //   this.user = data;
    // });
  }

  onSubmit() {
    const url = `${this.hostUrl}/add`;
    this.error = false;
    const body = this.registerUser;
    this.http.post(url, body).subscribe(data => {
      this.closeModal();
      this.refreshList();
    },
      err => {
        this.showSuccessMessage = false;
        this.error = true;
        this.errorMessage = err.message;
      })
  }

  refreshList() {
    this.http.get(this.hostUrl).subscribe(data => {
      this.user = data;
      console.log('refreshList');
    })
  }

  closeAlert() {
    this.error = false;
    location.reload();
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
