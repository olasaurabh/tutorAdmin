import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentToBeSentComponent } from './assignment-to-be-sent.component';

describe('AssignmentToBeSentComponent', () => {
  let component: AssignmentToBeSentComponent;
  let fixture: ComponentFixture<AssignmentToBeSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentToBeSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentToBeSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
