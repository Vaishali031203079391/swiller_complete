import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultloginComponent } from './defaultlogin.component';

describe('DefaultloginComponent', () => {
  let component: DefaultloginComponent;
  let fixture: ComponentFixture<DefaultloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
