import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebanalyticsComponent } from './webanalytics.component';

describe('WebanalyticsComponent', () => {
  let component: WebanalyticsComponent;
  let fixture: ComponentFixture<WebanalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebanalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
