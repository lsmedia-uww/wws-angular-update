import { Deserializable } from './deserializable.model';

export class WeatherData implements Deserializable {
  station_id?: number;
  sensors?: Sensor[];
  generated_at?: number;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}

class Sensor implements Deserializable {
  lsid?: number;
  sensor_type?: number;
  data_structure_type?: number;
  data?: { [key: string]: number | null }[];

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}