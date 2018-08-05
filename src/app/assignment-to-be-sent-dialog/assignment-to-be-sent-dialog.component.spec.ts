import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentToBeSentDialogComponent } from './assignment-to-be-sent-dialog.component';

describe('AssignmentToBeSentDialogComponent', () => {
  let component: AssignmentToBeSentDialogComponent;
  let fixture: ComponentFixture<AssignmentToBeSentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentToBeSentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentToBeSentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
