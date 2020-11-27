import { DatePipe, DecimalPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PressureComponent } from './components/pressure/pressure.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { WeatherDashboardComponent } from './pages/weather-dashboard/weather-dashboard.component';
import { HeatIndexComponent } from './components/heat-index/heat-index.component';
import { DewPointComponent } from './components/dew-point/dew-point.component';
import { WindRoseComponent } from './components/wind-rose/wind-rose.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    WeatherDashboardComponent,
    PressureComponent,
    HeatIndexComponent,
    DewPointComponent,
    WindRoseComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    NgxChartsModule
  ],
  providers: [DecimalPipe, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
