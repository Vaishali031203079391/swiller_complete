import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasictableComponent } from './basictable.component';

describe('BasictableComponent', () => {
  let component: BasictableComponent;
  let fixture: ComponentFixture<BasictableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasictableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasictableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
