import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ErrorTwoComponent } from './500-error.component';

describe('ErrorTwoComponent', () => {
  let component: ErrorTwoComponent;
  let fixture: ComponentFixture<ErrorTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
