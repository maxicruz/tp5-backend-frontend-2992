import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../../models/mensaje';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/services/api/empresa.service';
import { MensajeService } from 'src/app/services/api/mensaje.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  mensaje: Mensaje;
  empresa: Empresa;
  tamMaxTexto: number = 100;
  tamTexto: number = 0;
  mensajes: Array<Mensaje>;
  empresas: Array<Empresa>;

  paraView: number;
  deView: string;
  textoView: string;

  constructor(private empresaService: EmpresaService, private mensajeService: MensajeService) { 
    this.mensaje = new Mensaje();
    this.empresa = new Empresa();
    this.mensajes = new Array<Mensaje>();
    this.empresas = new Array<Empresa>();
    this.listarEmpresas();
    this.listarMensajes();
  }

  /* Permite actualizar el tamaño */
  public cambiarTamTexto() {
    this.tamTexto = this.mensaje.texto.length;
    console.log(this.tamTexto);
  }

  /* Accion de enviar mensaje */
  public enviarMensaje() {
    this.mensaje.fecha = new Date();
    console.log(this.mensaje);
    this.mensajeService.addMensaje(this.mensaje).subscribe(
      result => {
        this.listarMensajes();
        this.limpiarMensaje();
      },
      error => {
        console.log(error);
      }
    )
    this.mensaje = new Mensaje();
    this.tamTexto = 0;
  }

  public listarMensajes() {
    this.mensajeService.getMensajes().subscribe(
      (result) => {
        console.log(result);
        this.mensajes = new Array<Mensaje>();
        result.forEach(element => {
          var men: Mensaje = new Mensaje();
          Object.assign(men, element);
          this.mensajes.push(men);
        });
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public limpiarMensaje() {
    this.mensaje = new Mensaje();
    this.tamTexto = 0;
  }

  public agregarEmpresa() {
    console.log(this.empresa);
    this.empresaService.addEmpresa(this.empresa).subscribe(
      result => {
        alert("Empresa agregada");
        this.listarEmpresas();
      },
      error => {
        console.log(error);
      }
    )
  }

  public listarEmpresas() {
    this.empresaService.getEmpresas().subscribe(
      (result) => {
        this.empresas = new Array<Empresa>();
        result.forEach(element => {
          var emp: Empresa = new Empresa();
          Object.assign(emp, element);
          this.empresas.push(emp);
        });
      },
      (error) => {
        console.log(error);
      }
    )
  }

	ngOnInit(): void {
  }
   
}
