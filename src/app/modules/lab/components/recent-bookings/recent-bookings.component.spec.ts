import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentBookingsComponent } from './recent-bookings.component';

describe('RecentBookingsComponent', () => {
  let component: RecentBookingsComponent;
  let fixture: ComponentFixture<RecentBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentBookingsComponent]
    });
    fixture = TestBed.createComponent(RecentBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
