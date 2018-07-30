import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvNotSubmittedComponent } from './cv-not-submitted.component';

describe('CvNotSubmittedComponent', () => {
  let component: CvNotSubmittedComponent;
  let fixture: ComponentFixture<CvNotSubmittedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvNotSubmittedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvNotSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
