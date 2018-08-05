import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendOfferLetterDialogComponent } from './send-offer-letter-dialog.component';

describe('SendOfferLetterDialogComponent', () => {
  let component: SendOfferLetterDialogComponent;
  let fixture: ComponentFixture<SendOfferLetterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendOfferLetterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendOfferLetterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
