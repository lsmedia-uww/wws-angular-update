import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeatIndexComponent } from './heat-index.component';

describe('HeatIndexComponent', () => {
  let component: HeatIndexComponent;
  let fixture: ComponentFixture<HeatIndexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
