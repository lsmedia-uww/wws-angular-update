import { Directive, ElementRef } from '@angular/core';
import { TempVariableService } from '../temp-variable.service';

@Directive({
  selector: '[appHeatIndex]'
})
export class HeatIndexDirective {

  constructor(private el: ElementRef, private varServe: TempVariableService) { 
    this.changeColor(el);
  }

  changeColor (el: ElementRef) {
    var heatIndex = this.varServe.getHiVariable();
    var temp = this.varServe.getTempVariable();
    var chill = this.varServe.getWindChillVariable();

    if(temp > 50) {
      var diff = heatIndex - temp;
      if (diff<=0) {el.nativeElement.classList.add('hi0')}
      else if (diff>0 && diff<5) {el.nativeElement.classList.add('hi1')}
      else if (diff>=5 && diff<10) {el.nativeElement.classList.add('hi2')}
      else if (diff>=10 && diff<15) {el.nativeElement.classList.add('hi3')}
      else if (diff>=15 && diff<20) {el.nativeElement.classList.add('hi4')}
      else if (diff>=20 && diff<30) {el.nativeElement.classList.add('hi5')}
      else if (diff>=30 && diff<40) {el.nativeElement.classList.add('hi6')}
      else if (diff>=40) {el.nativeElement.classList.add('hi7')}
      else {el.nativeElement.classList.add('hi0')}
    }
    else {
      var diff = temp - chill;
      if (diff<=0) {el.nativeElement.classList.add('hi0')}
      else if (diff>0 && diff<5) {el.nativeElement.classList.add('hi8')}
      else if (diff>=5 && diff<10) {el.nativeElement.classList.add('hi9')}
      else if (diff>=10 && diff<15) {el.nativeElement.classList.add('hi10')}
      else if (diff>=15 && diff<20) {el.nativeElement.classList.add('hi11')}
      else if (diff>=20 && diff<30) {el.nativeElement.classList.add('hi12')}
      else if (diff>=30 && diff<40) {el.nativeElement.classList.add('hi13')}
      else if (diff>=40) {el.nativeElement.classList.add('hi14')}
      else {el.nativeElement.classList.add('hi0')}
    }
  }

}
