import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpecialsComponent } from './specials.component';

describe('SpecialsComponent', () => {
  let component: SpecialsComponent;
  let fixture: ComponentFixture<SpecialsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
