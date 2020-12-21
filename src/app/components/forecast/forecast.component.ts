import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { Forecast } from 'src/app/models/forecast.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastComponent implements AfterViewInit {
  @Input() forecast: Forecast;
  current = Date.now();
  displayedColumns = ['date', 'temp', 'icon', 'weather-description'];
  showMobileView: boolean = false;
  showMobileLandscapeView: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngAfterViewInit() {
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape,
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.HandsetPortrait]) {
        this.showMobileView = true;
        this.showMobileLandscapeView = false;
        console.log('handset portrait');
      } else if (result.breakpoints[Breakpoints.HandsetLandscape]) {
        this.showMobileView = false;
        this.showMobileLandscapeView = true;
        console.log('handset landscape');
      } else {
        this.showMobileLandscapeView = false;
        this.showMobileView = false;
        console.log(result);
      }
    })
  }
}
