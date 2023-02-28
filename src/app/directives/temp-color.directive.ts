import { Directive, ElementRef} from '@angular/core';
import { TempVariableService } from '../temp-variable.service';

@Directive({
  selector: '[appTempColor]'
})
export class TempColorDirective {
  constructor(private el: ElementRef, private varServe: TempVariableService) { 
    this.changeColor(el)
  }

  changeColor (el: ElementRef) {
    var temp = this.varServe.getTempVariable();

    if(temp < 0) el.nativeElement.classList.add('t1');
    else if(temp >=0 && temp<5){el.nativeElement.classList.add('t2');}
    else if(temp >=5 && temp<10) {el.nativeElement.classList.add('t3');}
    else if(temp >=10 && temp<15) {el.nativeElement.classList.add('t4');}
    else if(temp >=15 && temp<20) {el.nativeElement.classList.add('t5');}
    else if(temp >=20 && temp<25) {el.nativeElement.classList.add('t6');}
    else if(temp >=25 && temp<30) {el.nativeElement.classList.add('t7');}
    else if(temp >=30 && temp<35) {el.nativeElement.classList.add('t8');}
    else if(temp >=35 && temp<40) {el.nativeElement.classList.add('t9');}
    else if(temp >=40 && temp<45) {el.nativeElement.classList.add('t10');}
    else if(temp >=45 && temp<50) {el.nativeElement.classList.add('t11');}
    else if(temp >=50 && temp<55) {el.nativeElement.classList.add('t12');}
    else if(temp >=55 && temp<60) {el.nativeElement.classList.add('t13');}
    else if(temp >=60 && temp<65) {el.nativeElement.classList.add('t14');}
    else if(temp >=65 && temp<70) {el.nativeElement.classList.add('t15');}
    else if(temp >=70 && temp<75) {el.nativeElement.classList.add('t16');}
    else if(temp >=75 && temp<80) {el.nativeElement.classList.add('t17');}
    else if(temp >=80 && temp<85) {el.nativeElement.classList.add('t18');}
    else if(temp >=85 && temp<90) {el.nativeElement.classList.add('t19');}
    else if(temp >=90 && temp<95) {el.nativeElement.classList.add('t20');}
    else if(temp >=95 && temp<100) {el.nativeElement.classList.add('t21');}
    else if(temp>=100){el.nativeElement.classList.add('t22');}
    else {el.nativeElement.classList.add('t0'); }
  }
  // if(temp < 0) el.nativeElement.style.backgroundColor = '#000080';
  // else if(temp >=0 && temp<5){el.nativeElement.style.backgroundColor = '#000099';}
  // else if(temp >=5 && temp<10) {el.nativeElement.style.backgroundColor = '#0000B2';}
  // else if(temp >=10 && temp<15) {el.nativeElement.style.backgroundColor = '#0000CC';}
  // else if(temp >=15 && temp<20) {el.nativeElement.style.backgroundColor = '#0000E6';}
  // else if(temp >=20 && temp<25) {el.nativeElement.style.backgroundColor = '#0000FF';}
  // else if(temp >=25 && temp<30) {el.nativeElement.style.backgroundColor = '#1919FF';}
  // else if(temp >=30 && temp<35) {el.nativeElement.style.backgroundColor = '#3333FF';}
  // else if(temp >=35 && temp<40) {el.nativeElement.style.backgroundColor = '#4D4DFF';}
  // else if(temp >=40 && temp<45) {el.nativeElement.style.backgroundColor = '#6666FF';}
  // else if(temp >=45 && temp<50) {el.nativeElement.style.backgroundColor = '#8080FF';}
  // else if(temp >=50 && temp<55) {el.nativeElement.style.backgroundColor = '#FF8080';}
  // else if(temp >=55 && temp<60) {el.nativeElement.style.backgroundColor = '#FF6666';}
  // else if(temp >=60 && temp<65) {el.nativeElement.style.backgroundColor = '#FF4D4D';}
  // else if(temp >=65 && temp<70) {el.nativeElement.style.backgroundColor = '#FF3333';}
  // else if(temp >=70 && temp<75) {el.nativeElement.style.backgroundColor = '#FF1919';}
  // else if(temp >=75 && temp<80) {el.nativeElement.style.backgroundColor = '#FF0000';}
  // else if(temp >=80 && temp<85) {el.nativeElement.style.backgroundColor = '#E60000';}
  // else if(temp >=85 && temp<90) {el.nativeElement.style.backgroundColor = '#CC0000';}
  // else if(temp >=90 && temp<95) {el.nativeElement.style.backgroundColor = '#B20000';}
  // else if(temp >=95 && temp<100) {el.nativeElement.style.backgroundColor = '#990000';}
  // else if(temp>=100){el.nativeElement.style.backgroundColor = '#800000';}
  // else {el.nativeElement.style.backgroundColor = '#808080'; }
}
