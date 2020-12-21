import { Component, Input, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-daily-rain',
  templateUrl: './total-daily-rain.component.html',
  styleUrls: ['./total-daily-rain.component.scss']
})
export class TotalDailyRainComponent implements OnInit {
  @Input() rain: number;

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    this.ngZone.run(() => {
      this.rain = this.rain;
    })
  }

}
