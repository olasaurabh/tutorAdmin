import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferLetterReceivedComponent } from './offer-letter-received.component';

describe('OfferLetterReceivedComponent', () => {
  let component: OfferLetterReceivedComponent;
  let fixture: ComponentFixture<OfferLetterReceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferLetterReceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferLetterReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
