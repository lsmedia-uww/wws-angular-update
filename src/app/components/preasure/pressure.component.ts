import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { TreeMapModule } from '@swimlane/ngx-charts';
import { ChartData } from 'src/app/models/chart-data.model';

@Component({
  selector: 'app-pressure',
  templateUrl: './pressure.component.html',
  styleUrls: ['./pressure.component.scss']
})
export class PressureComponent implements AfterViewChecked {
  @ViewChild('resizedDiv') resizedDiv: ElementRef;
  public previousWidthOfResizedDiv: number = 0;
  pressureData: any[] = [];

  // Chart settings
  scheme: string = 'air';
  legend: boolean = true;
  showXAxisLabel: boolean = false;
  yAxisLabel: string = 'Pressure';
  timeline: boolean = true;

  constructor() { }

  ngAfterViewChecked(): void {
    if (this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth) {
      //render your data for the chart using spread operator 
      this.pressureData = [...this.pressureData];
    }
    this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
  }

  displayData(data: ChartData[]) {
    this.pressureData = data;
    this.pressureData = [...this.pressureData];
  }

  onSelect(event) {
    console.log(event);
  }
}
