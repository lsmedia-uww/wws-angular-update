import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HistoricData } from 'src/app/models/historic-data.model';
import { WeatherData } from 'src/app/models/weather-data.model';

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
  @Input() speed: number;
  position: string;
  compassRoseValue = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw", "n"];

  constructor() {
    this.position = this.compassRoseValue[2];
    console.log(this.direction);
    console.log(Math.floor(this.direction / 16) - 1);
  }

  ngOnInit(): void {
    
  }
}
