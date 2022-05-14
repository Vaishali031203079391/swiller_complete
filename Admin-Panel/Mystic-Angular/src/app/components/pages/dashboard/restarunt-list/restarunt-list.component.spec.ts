import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaruntListComponent } from './restarunt-list.component';

describe('RestaruntListComponent', () => {
  let component: RestaruntListComponent;
  let fixture: ComponentFixture<RestaruntListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaruntListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaruntListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
