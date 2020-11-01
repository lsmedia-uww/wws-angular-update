import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss'],
})
export class TemperatureComponent implements AfterViewChecked {
  @ViewChild('resizedDiv') resizedDiv: ElementRef;
  public previousWidthOfResizedDiv: number = 0;

  view: any[] = [200, 200];
  tempData: any[] = [];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = 'Temperature °F';
  yScaleMax = 50;
  schemeType = 'air';

  constructor() { }

  ngAfterViewChecked(): void {
    if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
      //render your data for the chart using spread operator 
      this.tempData = [...this.tempData];
    }
    this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
  }

  displayData(data: any[]) {
    this.tempData = data;
    this.tempData = [...this.tempData];
    console.table(this.tempData);
  }

  onSelect(event) {
    console.log(event);
  }
}