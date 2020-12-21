import { Deserializable } from './deserializable.model';

export class Forecast implements Deserializable {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
  minutely: Minutely[];
  daily: Daily[];
  alerts?: Alert[];

  deserialize(input: any): this {
    Object.assign(this, input);
    this.minutely = input.minutely.map((data: any) => new Minutely().deserialize(data));
    this.daily = input.daily.map((data: any) => new Daily().deserialize(data));
    this.alerts = input.alerts == null ? null : input.alerts.map((data: any) => new Alert().deserialize(data));
    return this;
  }
}

export class Alert implements Deserializable {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}

export class Current implements Deserializable {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: Weather[];
  rain: Rain;

  deserialize(input: any): this {
    Object.assign(this, input);
    this.weather = input.weather.map((data: any) => new Weather().deserialize(data));
    return this;
  }
}

export class Rain implements Deserializable {
  "1h": number;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}

export class Weather implements Deserializable {
  id: number;
  main: string;
  description: string;
  icon: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}

export class Daily implements Deserializable {
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
  rain?: number;
  uvi: number;
  snow?: number;

  deserialize(input: any): this {
    Object.assign(this, input);
    this.weather = input.weather.map((data: any) => new Weather().deserialize(data));
    return this;
  }
}

export class FeelsLike implements Deserializable {
  day: number;
  night: number;
  eve: number;
  morn: number;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}

export class Temp implements Deserializable {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}

export class Minutely implements Deserializable {
  dt: number;
  precipitation: number;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
