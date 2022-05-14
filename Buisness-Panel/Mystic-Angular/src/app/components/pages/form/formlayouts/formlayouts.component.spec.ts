import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlayoutsComponent } from './formlayouts.component';

describe('FormlayoutsComponent', () => {
  let component: FormlayoutsComponent;
  let fixture: ComponentFixture<FormlayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlayoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
