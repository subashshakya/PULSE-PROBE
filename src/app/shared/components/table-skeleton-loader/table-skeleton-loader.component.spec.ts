import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSkeletonLoaderComponent } from './table-skeleton-loader.component';

describe('TableSkeletonLoaderComponent', () => {
  let component: TableSkeletonLoaderComponent;
  let fixture: ComponentFixture<TableSkeletonLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableSkeletonLoaderComponent]
    });
    fixture = TestBed.createComponent(TableSkeletonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
