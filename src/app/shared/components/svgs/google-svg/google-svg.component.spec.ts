import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSvgComponent } from './google-svg.component';

describe('GoogleSvgComponent', () => {
  let component: GoogleSvgComponent;
  let fixture: ComponentFixture<GoogleSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
