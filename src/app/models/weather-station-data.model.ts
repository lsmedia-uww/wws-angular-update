import { Deserializable } from './deserializable.model';

export class WeatherStationData implements Deserializable {
  station_id?: number;
  sensors?: Sensor[];
  generated_at?: number;

  deserialize(input: any): this {
    Object.assign(this, input);
    //this.sensors = new Sensors().deserialize(input.sensors);
    //this.image = new Image().deserialize(input.image);
    return this;
  }
}

class Sensor implements Deserializable {
  lsid?: number;
  sensor_type?: number;
  data_structure_type?: number;
  data?: { [key: string]: number | null }[];

  deserialize(input: any): this {
    Object.assign(this, input);
    //this.data = new Data().deserialize(input.data);
    return this;
  }
}
