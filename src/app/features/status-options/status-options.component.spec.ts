import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusOptionsComponent } from './status-options.component';

describe('StatusOptionsComponent', () => {
  let component: StatusOptionsComponent;
  let fixture: ComponentFixture<StatusOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
