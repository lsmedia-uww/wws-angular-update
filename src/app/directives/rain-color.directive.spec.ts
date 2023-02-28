import { ElementRef } from '@angular/core';
import { TempVariableService } from '../temp-variable.service';
import { RainColorDirective } from './rain-color.directive';

describe('RainColorDirective', () => {
  it('should create an instance', () => {
    let el: ElementRef;
    const tempServ = new TempVariableService;
    const directive = new RainColorDirective(el, tempServ);
    expect(directive).toBeTruthy();
  });
});
