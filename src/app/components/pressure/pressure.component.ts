import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { interval, Subscription } from 'rxjs';
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
  selector: 'app-pressure',
  templateUrl: './pressure.component.html',
  styleUrls: ['./pressure.component.scss']
})
export class PressureComponent implements OnInit {
  public datePipe = new DatePipe('en-US');
  public options: any = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Pressure Throughout the Day'
    },
    yAxis: {
      title: {
        text: 'Pressure (mb)'
      }
    },
    time: {
      useUTC: false
    },
    xAxis: {
      type: 'datetime',
      labels: {
        formatter: function() {
          const d = new Date(this.value);
          return ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
        }
      }
    },
    tooltip: {
      
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Pressure',
        turboThreshold: 500000,
        data: []
      }
    ]
  }
  subscription: Subscription;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.subscription = this.api.getHistoricWeatherData().subscribe(data => {
      const sensorData = [];
      data.sensors[0].data.forEach(item => {
        const row = [
          new Date(item.ts * 1000).getTime(),
          Math.round((item.bar * 33.864)*100)/100 //convert from inch of mercury (hg) to (mb)
        ];
        sensorData.push(row);
      });
      this.options.series[0]['data'] = sensorData;
      Highcharts.chart('pressureChartContainer', this.options);
    });
  }

}
