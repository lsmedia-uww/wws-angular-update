import { ElementRef } from '@angular/core';
import { TempVariableService } from '../temp-variable.service';
import { HeatIndexDirective } from './heat-index.directive';

describe('HeatIndexDirective', () => {
  it('should create an instance', () => {
    let el: ElementRef;
    const tempServ = new TempVariableService;
    const directive = new HeatIndexDirective(el, tempServ);
    expect(directive).toBeTruthy();
  });
});
