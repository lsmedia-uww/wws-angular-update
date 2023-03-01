import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarRadiationComponent } from './solar-radiation.component';

describe('SolarRadiationComponent', () => {
  let component: SolarRadiationComponent;
  let fixture: ComponentFixture<SolarRadiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolarRadiationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarRadiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
