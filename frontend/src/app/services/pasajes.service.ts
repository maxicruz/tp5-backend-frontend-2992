import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {

  vector_ventas: Array<Pasaje>;

  constructor() { 
    this.vector_ventas = new Array<Pasaje>();
  }

  venderPasaje(pasaje: Pasaje) {
    this.vector_ventas.push(pasaje);
  }

  listarPasajes() {
    return this.vector_ventas;
  }

}
