import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherDashboardComponent } from './pages/weather-dashboard/weather-dashboard.component';

const routes: Routes = [
  { path: '', component: WeatherDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
