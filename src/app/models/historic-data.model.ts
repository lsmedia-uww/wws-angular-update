import { Deserializable } from './deserializable.model';

export class HistoricData implements Deserializable {
  sensors: Sensor[];
  generated_at: number;
  station_id: number;

  deserialize(input: any): this {
    Object.assign(this, input);
    this.sensors = input.sensors.map(sensor => new Sensor().deserialize(sensor));
    return this;
  }
}

class Sensor implements Deserializable {
  lsid: number;
  data: SensorData[];
  sensor_type: number;
  data_structure_type: number;

  deserialize(input: any): this {
    Object.assign(this, input);
    this.data = input.data.map(data => new SensorData().deserialize(data));
    return this;
  }
}

class SensorData implements Deserializable {
  ts: number;
  arch_int: number;
  rev_type: number;
  temp_out: number;
  temp_out_hi: number;
  temp_out_lo: number;
  temp_in: number;
  hum_in: number;
  hum_out: number;
  rainfall_in: number;
  rainfall_clicks: null;
  rainfall_mm: null;
  rain_rate_hi_in: number;
  rain_rate_hi_clicks: null;
  rain_rate_hi_mm: null;
  et: number;
  bar: number;
  solar_rad_avg: number;
  solar_rad_hi: number;
  uv_index_avg: number;
  uv_index_hi: number;
  wind_num_samples: number;
  wind_speed_avg: number;
  wind_speed_hi: string;
  wind_dir_of_hi: number;
  wind_dir_of_prevail: number;
  forecast_rule: number;
  abs_press: number;
  bar_noaa: number;
  bar_alt: number;
  dew_point_out: number;
  dew_point_in: number;
  emc: number;
  heat_index_out: number;
  heat_index_in: number;
  wind_chill: number;
  wind_run: number;
  deg_days_heat: number;
  deg_days_cool: number;
  solar_energy: number;
  uv_dose: number;
  thw_index: number;
  thsw_index: number;
  wet_bulb: number;
  night_cloud_cover: number;
  iss_reception: null;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}