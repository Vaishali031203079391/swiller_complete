import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientmanagementComponent } from './clientmanagement.component';

describe('ClientmanagementComponent', () => {
  let component: ClientmanagementComponent;
  let fixture: ComponentFixture<ClientmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});