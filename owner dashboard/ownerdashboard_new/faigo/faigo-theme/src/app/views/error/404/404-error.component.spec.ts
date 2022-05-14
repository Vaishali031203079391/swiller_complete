import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ErrorOneComponent } from './404-error.component';

describe('ErrorOneComponent', () => {
  let component: ErrorOneComponent;
  let fixture: ComponentFixture<ErrorOneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
