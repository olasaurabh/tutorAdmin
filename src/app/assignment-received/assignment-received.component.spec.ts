import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentReceivedComponent } from './assignment-received.component';

describe('AssignmentReceivedComponent', () => {
  let component: AssignmentReceivedComponent;
  let fixture: ComponentFixture<AssignmentReceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentReceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
