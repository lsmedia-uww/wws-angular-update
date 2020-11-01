import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from '../constants/API';
import { WeatherData } from '../models/weather-data.model';
import { WeatherStationData } from '../models/weather-station-data.model';
import { HandleError, HttpErrorHandlerService } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private handleError: HandleError;
  // private weatherStationDataSource = new Subject<WeatherStationData>();
  // private currentWeatherSource = new Subject<WeatherData>();
  // private historicWeatherSource = new Subject<WeatherData>();

  // stationData$ = this.weatherStationDataSource.asObservable();
  // currentWeather$ = this.currentWeatherSource.asObservable();
  // historicWeather = this.historicWeatherSource.asObservable();
  
  constructor(
    private http: HttpClient,
     httpErrorHandler: HttpErrorHandlerService) {
     this.handleError = httpErrorHandler.createHandleError('ApiSerrvice');
  }

  public getWeatherStationData(): Observable<WeatherStationData> {
    return this.http.get<WeatherStationData>(API_URL + '/station-data').pipe(
      map(data => new WeatherStationData().deserialize(data)),
      catchError(() => throwError('Weather station data not found'))
    );
  }

  // public getWeatherStationData() {
  //   return this.http.get<WeatherStationData>(API_URL + '/station-data').pipe(
  //     catchError(this.handleError('getWeatherStationData'))
  //   );
  // }

  // public getCurrentWeather() {
  //   return this.http.get<WeatherData>(API_URL).pipe(
  //     catchError(this.handleError('getCurrentWeather'))
  //   );
  // }

  // public getHistoricWeather() {
  //   return this.http.get<WeatherData>(API_URL + '/historic').pipe(
  //     catchError(this.handleError('getHistoricWeather'))
  //   );
  // }
}
