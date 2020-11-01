import { Deserializable } from './deserializable.model';
import { Sensor } from './sensor.model';

export class WeatherData implements Deserializable {
  deserialize(input: any): this {
    return Object.assign(this, input);
  }
  
  station_id?: number;
  sensors?: Sensor[];
  generated_at?: number;
}