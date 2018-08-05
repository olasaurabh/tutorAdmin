import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentSentComponent } from './assignment-sent.component';

describe('AssignmentSentComponent', () => {
  let component: AssignmentSentComponent;
  let fixture: ComponentFixture<AssignmentSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
