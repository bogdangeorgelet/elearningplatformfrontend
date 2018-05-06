import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private hostUrl = 'http://localhost:8082/course';
  courses;
  classes;
  showEditBox = false;
  showAddBox = false;
  modalCourse = {id: '', name: '', course_type: '', price: ''};
  error = false;
  errorMessage;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const url = `${this.hostUrl}`;
    this.http.get(url).subscribe(data => {
      this.courses = data;
    });
  }

  openEditBox(course) {
    this.showEditBox = true;
    this.classes = 'blurred';
    this.modalCourse.id = course.id;
    this.modalCourse.name = course.name;
    this.modalCourse.course_type = course.course_type;
    this.modalCourse.price = course.price;
  }

  openAddBox() {
    this.error = false;
    this.showAddBox = true;
    this.classes = 'blurred';
    this.courses.id = '';
    this.courses.name = '';
    this.courses.course_type = '';
    this.courses.price = '';
  }

  closeEditbox() {
    this.showEditBox = false;
    this.classes = '';
  }

  closeAddBox() {
    this.error = false;
    this.showAddBox = false;
    this.classes = '';
  }

  closeAlert() {
    this.error = false;
  }

  addCourse() {
    const url = `${this.hostUrl}/add`;
    this.error = false;
    const body = this.modalCourse;
    this.http.post(url, body).subscribe(data => {
      this.closeAddBox();
      this.refreshList();
    },
      err => {
        this.error = true;
        this.errorMessage = err.error.message;
      });
  }

  updateCourse(id, updateCourse) {
    const body = {
      'id' : id,
      'name' : updateCourse.name,
      'course_type' : updateCourse.course_type,
      'price' : updateCourse.price
    };
    this.http.put(this.hostUrl + '/' + id, body).subscribe(data => {
      this.closeEditbox();
      this.refreshList();
    })
  }

  deleteCourse(id) {
    this.http.delete(this.hostUrl + '/' + id).subscribe(data => {
      this.closeEditbox();
      this.refreshList();
    })
  }

  deleteCourseDirect(id) {
    this.http.delete(this.hostUrl + '/' + id).subscribe(data => {
      this.refreshList();
    })
  }

  refreshList() {
    this.http.get(this.hostUrl).subscribe(data => {
      this.courses = data;
    })
  }
}

