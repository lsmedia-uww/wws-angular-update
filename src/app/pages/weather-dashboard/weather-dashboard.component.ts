import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PressureComponent } from 'src/app/components/preasure/pressure.component';
import { TemperatureComponent } from 'src/app/components/temperature/temperature.component';
import { ChartData } from 'src/app/models/chart-data.model';
import { WeatherData } from 'src/app/models/weather-data.model';
import { WeatherStationData } from 'src/app/models/weather-station-data.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss'],
  providers: [ApiService]
})
export class WeatherDashboardComponent implements AfterViewInit {
  @ViewChild(TemperatureComponent)
  @ViewChild(PressureComponent)
  tempComponent: TemperatureComponent;
  pressureComponent: PressureComponent;

  weatherData: WeatherData;
  stationData: WeatherStationData;

  constructor(private apiService: ApiService) {}

  ngAfterViewInit() {
    this.apiService.getWeatherStationData().subscribe((stationData) => {
      this.tempComponent.displayData([
        new ChartData('Outside Temp', Number.parseFloat(stationData.temp_f)),
        new ChartData('Wind Chill', Number.parseFloat(stationData.windchill_f)),
        new ChartData('Heat Index', Number.parseFloat(stationData.heat_index_f)),
        new ChartData('Dew Point', Number.parseFloat(stationData.dewpoint_f))
      ]);
      stationData.davis_current_observation.
    });
  }

  onSelect(event) {
    console.log(event);
  }
}
