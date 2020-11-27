import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { TemperatureComponent } from 'src/app/components/temperature/temperature.component';
import { ChartData } from 'src/app/models/chart-data.model';
import { WeatherData } from 'src/app/models/weather-data.model';
import { WeatherStationData } from 'src/app/models/weather-station-data.model';
import { ApiService } from 'src/app/services/api.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss'],
  providers: [ApiService]
})
export class WeatherDashboardComponent implements AfterViewInit {
  @ViewChild(TemperatureComponent)
  tempComponent: TemperatureComponent;

  temp: number = 0;
  windChill: number = 0;
  heatIndex: number = 0;
  dewPoint: number = 0;
  windDirection: number = 0;
  windSpeed: number = 0;

  weatherData: WeatherData;
  stationData: WeatherStationData;

  cardLayout: any;

  constructor(
    private apiService: ApiService,
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngAfterViewInit() {
    this.cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        if (matches) {
          return {
            columns: 1,
            miniCard: { cols: 1, rows: 1},
            card: { cols: 1, rows: 2 },
            chart: { cols: 1, rows: 2}
          };
        }

        return {
          columns: 3,
          miniCard: { cols: 1, rows: 1 },
          card: { cols: 2, rows: 2 },
          chart: {  cols: 3, rows: 2 },
        };
      })
    );
   
    this.apiService.getWeatherStationData().subscribe(stationData => {
      this.temp = Number.parseFloat(stationData.temp_f);
      this.windChill = Number.parseFloat(stationData.windchill_f);
      this.heatIndex = Number.parseFloat(stationData.heat_index_f);
      this.dewPoint = Number.parseFloat(stationData.dewpoint_f);
    });

    this.apiService.getCurrentWeatherData().subscribe(currentWeather => {
      console.log(currentWeather);
      this.windDirection = currentWeather.sensors[0].data[0].wind_dir;
      this.windSpeed = currentWeather.sensors[0].data[0].wind_speed;
    });
  }

  onSelect(event) {
    console.log(event);
  }
}
