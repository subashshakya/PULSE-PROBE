import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsCarouselComponent } from './labs-carousel.component';

describe('LabsCarouselComponent', () => {
  let component: LabsCarouselComponent;
  let fixture: ComponentFixture<LabsCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabsCarouselComponent]
    });
    fixture = TestBed.createComponent(LabsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
