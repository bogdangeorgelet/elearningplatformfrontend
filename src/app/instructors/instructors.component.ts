import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {

  private hostUrl = 'http://localhost:8082/instructors';
  instructors;
  classes;
  modalInstructor = {id: '', firstName: '', lastName: '', password: '', email: '', dateCreated: ''};
  error = false;
  errorMessage;
  showEditBox = false;
  showAddBox = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const url = `${this.hostUrl}`;
    this.http.get(url).subscribe(data => {
      this.instructors = data;
    })
  } 

  openEditBox(instructor) {
    this.showEditBox = true;
    this.classes = 'blurred';
    this.modalInstructor.id = instructor.id;
    this.modalInstructor.firstName = instructor.firstName;
    this.modalInstructor.lastName = instructor.lastName;
    this.modalInstructor.password = instructor.password;
    this.modalInstructor.email = instructor.email;
    this.modalInstructor.dateCreated = instructor.dateCreated;
  }

  openAddBox() {
    this.showAddBox = true;
    this.error = false;
    this.classes = 'blurred';
    this.instructors.id = '';
    this.instructors.firstName = '';
    this.instructors.lastName = '';
    this.instructors.password = '';
    this.instructors.email = '';
    this.instructors.dateCreated = '';
  }

  closeAddBox() {
    this.showAddBox = false;
    this.classes = '';
    this.error = false;
  }

  closeEditBox() {
    this.showEditBox = false;
    this.classes = '';
  }

  closeAlert() {
    this.error = false;
  }

  addInstructor() {
    const url = `${this.hostUrl}`;
    this.error = false;
    const body = this.modalInstructor;
    this.http.post(url, body).subscribe(data => {
      this.closeAddBox();
      this.refreshList();
    },
    err => {
      this.error = true;
      this.errorMessage = err.error.message;
    })
  }

  updateInstructor(id, updateInstructor) {
    const body = {
      'id' : updateInstructor.id,
      'firstName' : updateInstructor.firstName,
      'lastName' : updateInstructor.lastName,
      'password' : updateInstructor.password,
      'email' : updateInstructor.email,
      'dateCreated' : updateInstructor.dateCreated
    };
    this.http.put(this.hostUrl + '/' + id, body).subscribe(data => {
      this.closeEditBox();
      this.refreshList();
    })
  }

  deleteInstructor(id) {
    this.http.delete(this.hostUrl + '/' + id).subscribe(data => {
      this.closeEditBox();
      this.refreshList();
    })
  }

  deleteInstructorDirectly(id) {
    this.http.delete(this.hostUrl + '/' + id).subscribe(data => {
      this.closeEditBox();
    })
  }

  refreshList() {
    this.http.get(this.hostUrl).subscribe(data => {
      this.instructors = data;
    })
  }

}
