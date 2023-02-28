import { Directive, ElementRef } from '@angular/core';
import { TempVariableService } from '../temp-variable.service';

@Directive({
  selector: '[appRainColor]'
})
export class RainColorDirective {

  constructor(private el: ElementRef, private varServe: TempVariableService) { 
    this.changeColor(el);
  }

  changeColor (el: ElementRef) {
    var rain = this.varServe.getRainVariable();

    if (rain==0) {el.nativeElement.classList.add('rf0')}
    else if (rain>0 && rain<0.05) {el.nativeElement.classList.add('rf1')}
    else if (rain>=0.05 && rain<0.10) {el.nativeElement.classList.add('rf2')}
    else if (rain>=0.10 && rain<0.25) {el.nativeElement.classList.add('rf3')}
    else if (rain>=0.25 && rain<0.50) {el.nativeElement.classList.add('rf4')}
    else if (rain>=0.50 && rain<0.75) {el.nativeElement.classList.add('rf5')}
    else if (rain>=0.75 && rain<1.00) {el.nativeElement.classList.add('rf6')}
    else if (rain>=1.00) {el.nativeElement.classList.add('rf7')}
    else {el.nativeElement.classList.add('rf0')}
  }
}
