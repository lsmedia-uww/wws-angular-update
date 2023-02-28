import { ElementRef } from '@angular/core';
import { TempVariableService } from '../temp-variable.service';
import { HumidityColorDirective } from './humidity-color.directive';

describe('HumidityColorDirective', () => {
  it('should create an instance', () => {
    let el: ElementRef;
    const tempServ = new TempVariableService;
    const directive = new HumidityColorDirective(el, tempServ);
    expect(directive).toBeTruthy();
  });
});
