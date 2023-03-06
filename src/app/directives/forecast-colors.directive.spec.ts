import { ForecastColorsDirective } from './forecast-colors.directive';
import { ElementRef } from '@angular/core';

describe('ForecastColorsDirective', () => {
  it('should create an instance', () => {
    let el: ElementRef;
    const directive = new ForecastColorsDirective(el);
    expect(directive).toBeTruthy();
  });
});
