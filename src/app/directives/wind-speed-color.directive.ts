import { Directive, ElementRef } from '@angular/core';
import { TempVariableService } from '../temp-variable.service';

@Directive({
  selector: '[appWindSpeedColor]'
})
export class WindSpeedColorDirective {
  constructor(private el: ElementRef, private varServe: TempVariableService) { 
    this.changeColor(el)
  }

  changeColor (el: ElementRef) {
    var wind = this.varServe.getWsVariable();

    if(wind == 0) el.nativeElement.classList.add('ws0');
    else if(wind >=0 && wind<5){el.nativeElement.classList.add('ws1');}
    else if(wind >=5 && wind<10) {el.nativeElement.classList.add('ws2');}
    else if(wind >=10 && wind<15) {el.nativeElement.classList.add('ws3');}
    else if(wind >=15 && wind<20) {el.nativeElement.classList.add('ws4');}
    else if(wind >=20 && wind<30) {el.nativeElement.classList.add('ws5');}
    else if(wind >=30 && wind<40) {el.nativeElement.classList.add('ws6');}
    else if(wind >=40 && wind<50) {el.nativeElement.classList.add('ws7');}
    else if(wind >=50) {el.nativeElement.classList.add('ws8');}
  }
}
