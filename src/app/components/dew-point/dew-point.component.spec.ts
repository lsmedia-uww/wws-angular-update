import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DewPointComponent } from './dew-point.component';

describe('DewPointComponent', () => {
  let component: DewPointComponent;
  let fixture: ComponentFixture<DewPointComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DewPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DewPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
