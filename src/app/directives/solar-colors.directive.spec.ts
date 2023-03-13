import { ElementRef } from '@angular/core';
import { TempVariableService } from '../temp-variable.service';
import { SolarColorsDirective } from './solar-colors.directive';

describe('SolarColorsDirective', () => {
  it('should create an instance', () => {
    let el: ElementRef;
    const tempServ = new TempVariableService;
    const directive = new SolarColorsDirective(el, tempServ);
    expect(directive).toBeTruthy();
  });
});
