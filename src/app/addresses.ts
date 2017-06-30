import {Geo} from './geo';
export class Addresses {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo = new Geo();
}