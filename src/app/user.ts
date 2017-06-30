import {Addresses} from './addresses';
export class User {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: Addresses = new Addresses();
  }