export class Forecast {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
  minutely: Minutely[];
  hourly: Current[];
  daily: Daily[];
  alerts: Alert[];
}

export class Alert {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
}

export class Current {
  dt: number;
  sunrise?: number;
  sunset?: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi?: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: Weather[];
  rain: Rain;
  pop?: number;
}

export class Rain {
  "1h": number;
}

export class Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export class Daily {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: Temp;
  feels_like: FeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  weather: Weather[];
  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
}

export class FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export class Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export class Minutely {
  dt: number;
  precipitation: number;
}
