import { Component, Input, NgZone, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ApiService } from 'src/app/services/api.service';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-wind-rose',
  templateUrl: './wind-rose.component.html',
  styleUrls: ['./wind-rose.component.scss']
})
export class WindRoseComponent implements OnInit {
  @Input() direction: number;
  speed: number;
  position: string;
  compassRoseValue = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
  compassDegrees = [0, 23, 45, 68, 90, 113, 135, 158, 180, 203, 225, 248, 270, 293, 313, 336, 0];
  dir: number;

  constructor(private apiService: ApiService, private ngZone: NgZone) {

  }

  ngOnInit(): void {
    this.apiService.getCurrentWeatherData().subscribe(currentWeather => {
      this.ngZone.run(() => {
        this.speed = currentWeather.sensors[0].data[0].wind_speed;
        this.dir = currentWeather.sensors[0].data[0].wind_dir;
        //this.dir = this.compassDegrees[Math.floor(currentWeather.sensors[0].data[0].wind_dir / 16)];
        this.position = this.compassRoseValue[Math.ceil((currentWeather.sensors[0].data[0].wind_dir % 360) / 22.5)];
      })
    });
  }
}
