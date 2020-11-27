import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DewPointComponent } from './dew-point.component';

describe('DewPointComponent', () => {
  let component: DewPointComponent;
  let fixture: ComponentFixture<DewPointComponent>;

  beforeEach(async(() => {
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
