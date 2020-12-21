import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from '../constants/API';
import { Forecast } from '../models/forecast.model';
import { HistoricData } from '../models/historic-data.model';
import { WeatherData } from '../models/weather-data.model';
import { WeatherStationData } from '../models/weather-station-data.model';
import { HandleError, HttpErrorHandlerService } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private handleError: HandleError;
  
  constructor(
    private http: HttpClient,
     httpErrorHandler: HttpErrorHandlerService) {
     this.handleError = httpErrorHandler.createHandleError('ApiSerrvice');
  }

  public getCurrentWeatherData(): Observable<WeatherData> {
    return this.http.get<WeatherData>(API_URL).pipe(
      map(data => new WeatherData().deserialize(data)),
      catchError(() => throwError('Weather data not found'))
    );
  }

  public getWeatherStationData(): Observable<WeatherStationData> {
    return this.http.get<WeatherStationData>(API_URL + '/station-data').pipe(
      map(data => new WeatherStationData().deserialize(data)),
      catchError(() => throwError('Weather station data not found'))
    );
  }

  public getHistoricWeatherData(): Observable<HistoricData> {
    return this.http.get<HistoricData>(API_URL + '/historic').pipe(
      map(data => new HistoricData().deserialize(data)),
      catchError((error) => throwError('Historic data not found '))
    );
  }

  public getForecastData(): Observable<Forecast> {
    return this.http.get<Forecast>(API_URL + '/forecast').pipe(
      map(data => new Forecast().deserialize(data)),
      catchError((err) => throwError('Weather forecast not found ' + err))
    );
  }
}
