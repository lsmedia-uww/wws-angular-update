import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { WeatherDashboardComponent } from './pages/weather-dashboard/weather-dashboard.component';
import { PressureComponent } from './components/preasure/pressure.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    WeatherDashboardComponent,
    PressureComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
