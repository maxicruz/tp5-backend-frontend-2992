import { Component, OnInit } from '@angular/core';
import { Asistente } from '../../models/asistente';
import { AsistenteService } from 'src/app/services/api/asistente.service';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {

  asistente: Asistente;
  asistentes: Array<Asistente>;
  btnModificar: boolean = false;

  constructor(private asistenteService:AsistenteService) {
    this.asistente = new Asistente;
    this.asistentes = new Array<Asistente>();
    this.refrescarAsistente();
  }

  ngOnInit(): void {

  }

  public guardarDatos() {
    if (!this.asistente.solicitaConstancia) {
      this.asistente.solicitaConstancia = false;
      this.solicitarConstancia();
    } else {
      this.solicitarConstancia();
    }
    this.limpiarCampos();
  }

  public solicitarConstancia() {
    this.asistenteService.addAsistente(this.asistente).subscribe(
      (result) => {
        this.refrescarAsistente();
        alert("Asistente Guardado");
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public refrescarAsistente() {
    this.asistenteService.getAsistentes().subscribe(
      (result) => {
        this.asistentes = new Array<Asistente>();
        result.forEach(element => {
          var asis: Asistente = new Asistente();
          Object.assign(asis, element);
          this.asistentes.push(asis);
        });
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public eliminarAsistente(asistente) {
    this.asistenteService.deleteAsistente(asistente._id).subscribe(
      result => {
        this.refrescarAsistente();
        alert("Asistente Eliminado");
      },
      error => {
        console.log(error);
      }
    )
  }

  public seleccionarAsistente(asistente) {
    this.asistente = Object.assign({}, asistente);
    this.btnModificar = true;
  }

  public modificarDatos() {
    this.asistenteService.updateAsistente(this.asistente).subscribe(
      result => {
        this.btnModificar = false;
        this.refrescarAsistente();
        this.limpiarCampos();
        alert("Asistente Modificado");
      },
      error => {
        console.log(error);
      }
    )
  }

  public limpiarCampos() {
    this.asistente = new Asistente();
  }
    
}
