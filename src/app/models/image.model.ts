import { Deserializable } from './deserializable.model';

export class Image implements Deserializable {
  url?: string;
  title?: string;
  link?: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}