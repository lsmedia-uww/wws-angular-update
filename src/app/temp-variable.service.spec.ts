import { TestBed } from '@angular/core/testing';

import { TempVariableService } from './temp-variable.service';

describe('TempVariableService', () => {
  let service: TempVariableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempVariableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
