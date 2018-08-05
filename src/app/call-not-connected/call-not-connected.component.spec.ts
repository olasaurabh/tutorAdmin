import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallNotConnectedComponent } from './call-not-connected.component';

describe('CallNotConnectedComponent', () => {
  let component: CallNotConnectedComponent;
  let fixture: ComponentFixture<CallNotConnectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallNotConnectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallNotConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
