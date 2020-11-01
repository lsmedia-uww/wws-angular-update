import { Deserializable } from './deserializable.model';

export class Sensor implements Deserializable {
  lsid?: number;
  sensor_type?: number;
  data_structure_type?: number;
  data?: { [key: string]: number | null }[];

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}