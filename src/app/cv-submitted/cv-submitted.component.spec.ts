import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSubmittedComponent } from './cv-submitted.component';

describe('CvSubmittedComponent', () => {
  let component: CvSubmittedComponent;
  let fixture: ComponentFixture<CvSubmittedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvSubmittedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
