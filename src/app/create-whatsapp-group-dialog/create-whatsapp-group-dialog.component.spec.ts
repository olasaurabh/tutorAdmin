import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWhatsappGroupDialogComponent } from './create-whatsapp-group-dialog.component';

describe('CreateWhatsappGroupDialogComponent', () => {
  let component: CreateWhatsappGroupDialogComponent;
  let fixture: ComponentFixture<CreateWhatsappGroupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWhatsappGroupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWhatsappGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
