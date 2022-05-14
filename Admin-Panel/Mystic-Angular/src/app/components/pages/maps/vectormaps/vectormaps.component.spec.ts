import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VectormapsComponent } from './vectormaps.component';

describe('VectormapsComponent', () => {
  let component: VectormapsComponent;
  let fixture: ComponentFixture<VectormapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VectormapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VectormapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
