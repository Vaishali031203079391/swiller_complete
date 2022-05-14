import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenugridComponent } from './menugrid.component';

describe('MenugridComponent', () => {
  let component: MenugridComponent;
  let fixture: ComponentFixture<MenugridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenugridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenugridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
