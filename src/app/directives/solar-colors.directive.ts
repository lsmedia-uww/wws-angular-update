import { Directive, ElementRef } from '@angular/core';
import { TempVariableService } from '../temp-variable.service';

@Directive({
  selector: '[appSolarColors]'
})
export class SolarColorsDirective {

  constructor(private el: ElementRef, private varServe: TempVariableService) { 
    this.changeColor(el);
  }

  changeColor (el: ElementRef) {
    var solarRad = this.varServe.getSolarRadVariable();

    if(solarRad >= 0 && solarRad <= 100) el.nativeElement.classList.add('solar0');
    else if(solarRad >=101 && solarRad <= 200){el.nativeElement.classList.add('solar1');}
    else if(solarRad >=201 && solarRad <= 300) {el.nativeElement.classList.add('solar2');}
    else if(solarRad >=301 && solarRad <= 400) {el.nativeElement.classList.add('solar3');}
    else if(solarRad >=401 && solarRad <= 500) {el.nativeElement.classList.add('solar4');}
    else if(solarRad >=501 && solarRad <= 600) {el.nativeElement.classList.add('solar5');}
    else if(solarRad >=601 && solarRad <= 700) {el.nativeElement.classList.add('solar6');}
    else if(solarRad >=701 && solarRad <= 800) {el.nativeElement.classList.add('solar7');}
    else if(solarRad >=801 && solarRad <= 900) {el.nativeElement.classList.add('solar8');}
    else if(solarRad >=901 && solarRad <= 1000) {el.nativeElement.classList.add('solar9');}
    else {el.nativeElement.classList.add('solar0'); }
  }

}
