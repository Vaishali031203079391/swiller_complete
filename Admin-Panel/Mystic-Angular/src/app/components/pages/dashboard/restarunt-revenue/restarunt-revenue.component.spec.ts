import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaruntRevenueComponent } from './restarunt-revenue.component';

describe('RestaruntRevenueComponent', () => {
  let component: RestaruntRevenueComponent;
  let fixture: ComponentFixture<RestaruntRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaruntRevenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaruntRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
