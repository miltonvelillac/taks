import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSvgComponent } from './email-svg.component';

describe('EmailSvgComponent', () => {
  let component: EmailSvgComponent;
  let fixture: ComponentFixture<EmailSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
