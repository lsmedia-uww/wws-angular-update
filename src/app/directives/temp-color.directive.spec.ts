import { ElementRef } from '@angular/core';
import { TempVariableService } from '../temp-variable.service';
import { TempColorDirective } from './temp-color.directive';

describe('TempColorDirective', () => {
  it('should create an instance', () => {
    let el: ElementRef;
    const tempServ = new TempVariableService;
    const directive = new TempColorDirective(el, tempServ);
    expect(directive).toBeTruthy();
  });
});
