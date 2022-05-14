import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaruntOverviewComponent } from './restarunt-overview.component';

describe('RestaruntOverviewComponent', () => {
  let component: RestaruntOverviewComponent;
  let fixture: ComponentFixture<RestaruntOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaruntOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaruntOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
