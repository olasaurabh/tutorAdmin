import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferLetterSentComponent } from './offer-letter-sent.component';

describe('OfferLetterSentComponent', () => {
  let component: OfferLetterSentComponent;
  let fixture: ComponentFixture<OfferLetterSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferLetterSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferLetterSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
