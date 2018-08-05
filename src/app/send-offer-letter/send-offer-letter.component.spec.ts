import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendOfferLetterComponent } from './send-offer-letter.component';

describe('SendOfferLetterComponent', () => {
  let component: SendOfferLetterComponent;
  let fixture: ComponentFixture<SendOfferLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendOfferLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendOfferLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
