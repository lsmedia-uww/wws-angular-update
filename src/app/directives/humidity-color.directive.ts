import { Directive, ElementRef } from '@angular/core';
import { TempVariableService } from '../temp-variable.service';

@Directive({
  selector: '[appHumidityColor]'
})
export class HumidityColorDirective {


  constructor(private el: ElementRef, private varServe: TempVariableService) { 
    this.changeColor(el);
  }

  changeColor (el: ElementRef) {
    var humidity = this.varServe.getHumVariable();

    if(humidity >= 0 && humidity < 10) el.nativeElement.classList.add('hum1');
    else if(humidity >=10 && humidity<20){el.nativeElement.classList.add('hum2');}
    else if(humidity >=20 && humidity<30) {el.nativeElement.classList.add('hum3');}
    else if(humidity >=30 && humidity<40) {el.nativeElement.classList.add('hum4');}
    else if(humidity >=40 && humidity<50) {el.nativeElement.classList.add('hum5');}
    else if(humidity >=50 && humidity<60) {el.nativeElement.classList.add('hum6');}
    else if(humidity >=60 && humidity<70) {el.nativeElement.classList.add('hum7');}
    else if(humidity >=70 && humidity<80) {el.nativeElement.classList.add('hum8');}
    else if(humidity >=80 && humidity<90) {el.nativeElement.classList.add('hum9');}
    else if(humidity >=90) {el.nativeElement.classList.add('hum10');}
    else {el.nativeElement.classList.add('hum0'); }
  }

}
