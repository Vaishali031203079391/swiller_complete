import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaruntsComponent } from './restarunts.component';

describe('RestaruntsComponent', () => {
  let component: RestaruntsComponent;
  let fixture: ComponentFixture<RestaruntsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaruntsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaruntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
