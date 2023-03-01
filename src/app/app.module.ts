import { DatePipe, DecimalPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PressureComponent } from './components/pressure/pressure.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { WeatherDashboardComponent } from './pages/weather-dashboard/weather-dashboard.component';
import { HeatIndexComponent } from './components/heat-index/heat-index.component';
import { DewPointComponent } from './components/dew-point/dew-point.component';
import { WindRoseComponent } from './components/wind-rose/wind-rose.component';
import { TotalDailyRainComponent } from './components/total-daily-rain/total-daily-rain.component';
import { Forecast } from './models/forecast.model';
import { ForecastComponent } from './components/forecast/forecast.component';
import { HumidityComponent } from './components/humidity/humidity.component';
import { TempColorDirective } from './directives/temp-color.directive';
import { HeatIndexDirective } from './directives/heat-index.directive';
import { HumidityColorDirective } from './directives/humidity-color.directive';
import { RainColorDirective } from './directives/rain-color.directive';
import { WindSpeedColorDirective } from './directives/wind-speed-color.directive';
import { SolarRadiationComponent } from './components/solar-radiation/solar-radiation.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    WeatherDashboardComponent,
    PressureComponent,
    HeatIndexComponent,
    DewPointComponent,
    WindRoseComponent,
    TotalDailyRainComponent,
    ForecastComponent,
    HumidityComponent,
    TempColorDirective,
    HeatIndexDirective,
    HumidityColorDirective,
    RainColorDirective,
    WindSpeedColorDirective,
    SolarRadiationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    NgxChartsModule,
    ScrollingModule,
  ],
  providers: [DecimalPipe, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
