import { Adelanto } from './adelanto';

export class Pasaje {
  _id: string;
  dniPasajero: number;
  precioPasaje: number;
  categoriaPasajero: string;
  fechaCompra: Date;
  adelantos: Array<Adelanto> = new Array<Adelanto>();

  constructor() {}

}