import { ElementRef } from '@angular/core';
import { TempVariableService } from '../temp-variable.service';
import { WindSpeedColorDirective } from './wind-speed-color.directive';

describe('WindSpeedColorDirective', () => {
  it('should create an instance', () => {
    let el: ElementRef;
    const tempServ = new TempVariableService;
    const directive = new WindSpeedColorDirective(el, tempServ);
    expect(directive).toBeTruthy();
  });
});
