import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WindRoseComponent } from './wind-rose.component';

describe('WindRoseComponent', () => {
  let component: WindRoseComponent;
  let fixture: ComponentFixture<WindRoseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WindRoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindRoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
