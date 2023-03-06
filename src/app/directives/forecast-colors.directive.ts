import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appForecastColors]'
})
export class ForecastColorsDirective {

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.changeColor(this.el,this.el.nativeElement.getAttribute('class'));
  }
  
  changeColor(el: ElementRef, toString: string) {
    var splitByDash = toString.split('-');
    var id = parseInt(splitByDash[2]);

    if ((id>=200 && id<=232)) { //thunderstorms
      el.nativeElement.style.color= "black";
    }
    else if ((id>=300 && id<=531) || (id>=602 && id<=620) || (id==901)) { // rain and showers
      el.nativeElement.style.color= "#0D9DE3";
    }
    else if ((id>=600 && id<=601) || (id>=621 && id<=622) || (id==903)) { //snow
      el.nativeElement.style.color= "lightblue";
    }
    else if ((id>=701 && id<=771)) { //fog and dust
      el.nativeElement.style.color= "lightgray";
    }
    else if ((id==781) || (id==900)) { //tornado
      el.nativeElement.style.color= "darkgray";
    }
    else if ((id == 800) || (id == 904)) { //sun
      el.nativeElement.style.color= "yellow";
    }
    else if ((id>=801 && id<=804)) { //cloudy
      el.nativeElement.style.color= "gray";
    }
    else if ((id == 902)) { //hurricane
      el.nativeElement.style.color= "red";
    }
    else if ((id == 905) || (id ==957)) { //windy
      el.nativeElement.style.color= "#DCDCDC";
    }
    else if ((id == 906)){ //hail
      el.nativeElement.style.color= "#97bdf7";
    }
    else { //others
      el.nativeElement.style.color= "orange";
    }
  }

}
