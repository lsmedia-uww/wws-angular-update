import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { TemperatureComponent } from 'src/app/components/temperature/temperature.component';
import { ChartData } from 'src/app/models/chart-data.model';
import { WeatherData } from 'src/app/models/weather-data.model';
import { WeatherStationData } from 'src/app/models/weather-station-data.model';
import { ApiService } from 'src/app/services/api.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Forecast } from 'src/app/models/forecast.model';

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
  dailyRain: number = 0;
  humidity: number =0;

  forecastData: Forecast;
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
            chart: { cols: 1, rows: 2},
            forecast: { cols: 1, rows: 4 },
          };
        }

        return {
          columns: 3,
          miniCard: { cols: 1, rows: 1 },
          card: { cols: 2, rows: 2 },
          chart: {  cols: 3, rows: 2 },
          forecast: { cols: 3, rows: 2 },
        };
      })
    );
   
    this.apiService.getWeatherStationData().subscribe(stationData => {
      this.temp = stationData.sensors[0].data[0].temp_out;
      this.windChill = stationData.sensors[0].data[0].wind_chill;
      this.heatIndex = stationData.sensors[0].data[0].heat_index;
      this.dewPoint = stationData.sensors[0].data[0].dew_point;
      this.dailyRain = stationData.sensors[0].data[0].rain_day_in;
      this.humidity = stationData.sensors[0].data[0].hum_out;
    });

    this.apiService.getCurrentWeatherData().subscribe(currentWeather => {
      let dir = currentWeather.sensors[0].data[0].wind_dir;
      this.windDirection = Math.ceil((dir % 360) / 22.5) + 1;
      this.windSpeed = currentWeather.sensors[0].data[0].wind_speed;
    });

    this.apiService.getForecastData().subscribe(forecast => {
      console.log(forecast);
      this.forecastData = forecast;
    })
  }

  onSelect(event) {
    console.log(event);
  }
}
