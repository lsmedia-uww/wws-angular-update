import { Component, Input, NgZone, OnInit, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.scss']
})
export class HumidityComponent implements OnInit{
  @Input() humidity: number;
  @Input() dewPoint: number;
  radius = 54;
  circumference = 2 * Math.PI * this.radius;
  dashoffset: number;

  constructor() {
    this.progress(0);
   }

  ngOnInit(): void {
    this.progress(this.humidity);
  }

  private progress(humidity: number) {
    const progress = humidity / 100;
    this.dashoffset = this.circumference * (1 - progress);
  }
}
