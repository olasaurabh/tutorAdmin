import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappGroupCreatedComponent } from './whatsapp-group-created.component';

describe('WhatsappGroupCreatedComponent', () => {
  let component: WhatsappGroupCreatedComponent;
  let fixture: ComponentFixture<WhatsappGroupCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsappGroupCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappGroupCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
