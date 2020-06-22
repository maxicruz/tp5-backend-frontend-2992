import { Component, OnInit } from '@angular/core';
import { Pasaje } from '../../models/pasaje';
import { PasajeService } from '../../services/pasajes.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  venta: Pasaje;
  pasajes: Array<Pasaje>;
  precioDescuento: number = 0;
  precioFinal: number = 0;
  mostrarDescuento: boolean = false;

  constructor(private ventaService: PasajeService) {
    this.venta = new Pasaje();
    this.pasajes = new Array<Pasaje>();
    this.listarPasajes();
  }

  public venderPasaje() {
    this.venta.fechaCompra = new Date();
    this.venta.precioPasaje = this.precioFinal;
    this.ventaService.venderPasaje(this.venta);
    this.venta = new Pasaje();
    this.limpiarPrecios();
  }

  public limpiarPantalla() {
    this.venta = new Pasaje();
    this.limpiarPrecios();
  }

  public listarPasajes() {
    this.pasajes = this.ventaService.listarPasajes();
  }

  public calcularDescuento() {
    if (this.venta.categoriaPasajero == 'm') {
      this.precioDescuento = (this.venta.precioPasaje * 25) / 100;
      this.precioFinal = this.venta.precioPasaje - this.precioDescuento;
      this.mostrarDescuento = true;
    }
    if (this.venta.categoriaPasajero == 'j') {
      this.precioDescuento = (this.venta.precioPasaje * 50) / 100;
      this.precioFinal = this.venta.precioPasaje - this.precioDescuento;
      this.mostrarDescuento = true;
    }
    if (this.venta.categoriaPasajero == 'a') {
      this.precioDescuento = 0;
      this.precioFinal = this.venta.precioPasaje;
      this.mostrarDescuento = false;
    }
  }

  public limpiarPrecios() {
    this.precioDescuento = 0;
    this.precioFinal = 0;
    this.mostrarDescuento = false;
  }

  ngOnInit(): void {
  }

}
