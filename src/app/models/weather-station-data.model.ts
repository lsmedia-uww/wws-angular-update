import { DavisCurrentObservation } from './davis-current-observation.model';
import { Deserializable } from './deserializable.model';
import { Image } from './image.model';

export class WeatherStationData implements Deserializable {
  credit?: string;
  credit_URL?: string;
  disclaimer_url?: string;
  copyright_url?: string;
  privacy_policy_url?: string;
  image?: Image;
  suggested_pickup?: string;
  suggested_pickup_period?: string;
  dewpoint_c?: string;
  dewpoint_f?: string;
  dewpoint_string?: string;
  heat_index_c?: string;
  heat_index_f?: string;
  heat_index_string?: string;
  location?: string;
  latitude?: string;
  longitude?: string;
  observation_time?: string;
  observation_time_rfc822?: string;
  pressure_in?: string;
  pressure_mb?: string;
  pressure_string?: string;
  relative_humidity?: string;
  station_id?: string;
  temp_c?: string;
  temp_f?: string;
  temperature_string?: string;
  wind_degrees?: string;
  wind_dir?: string;
  wind_kt?: string;
  wind_mph?: string;
  windchill_c?: string;
  windchill_f?: string;
  windchill_string?: string;
  davis_current_observation?: DavisCurrentObservation;
  time_to_generate?: string;

  deserialize(input: any): this {
    Object.assign(this, input);
    this.davis_current_observation = new DavisCurrentObservation().deserialize(input.davis_current_observation);
    this.image = new Image().deserialize(input.image);
    return this;
  }
}
