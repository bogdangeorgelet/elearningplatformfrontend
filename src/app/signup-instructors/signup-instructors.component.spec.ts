import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupInstructorsComponent } from './signup-instructors.component';

describe('SignupInstructorsComponent', () => {
  let component: SignupInstructorsComponent;
  let fixture: ComponentFixture<SignupInstructorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupInstructorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupInstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
