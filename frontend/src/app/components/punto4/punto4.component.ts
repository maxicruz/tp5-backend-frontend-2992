import { Component, OnInit } from '@angular/core';
import { PalabraService } from './../../services/palabra.service';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {

  itemSelect;
  letrasParaAdivinar = [];
  letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  indiceEnFoco: string;
  fueIniciado: boolean;
  vidas: number;
  puntaje: number;
  gano: boolean;
  perdio: boolean;

  constructor(private animalesService: PalabraService) {
    this.animalesService.cargarPalabras();
    this.animalesService.listarPalabras();
    this.fueIniciado = false;
    this.gano = false;
    this.perdio = false;
  }

  ngOnInit(): void {
  }

  public iniciarJuego() {
    this.gano = false;
    this.fueIniciado = true;
    this.perdio = false;
    this.vidas = 6;
    this.puntaje = 0;
    this.selectItemRamdom();
  }

  public selectItemRamdom() {
    this.itemSelect = this.animalesService.listarPalabras()[Math.floor(Math.random() * 9)];
    this.letrasParaAdivinar = Array.from(this.itemSelect.palabraIngles);
  }

  public verificarLetraIngresada() {
    let correctos = 0;
    for (let i = 0; i < this.letrasParaAdivinar.length; i++) {
      let input: any = document.getElementById(i.toString());
      let letraEscrita: string = input.value;
      let letraOculta = this.letrasParaAdivinar[i];
      if (letraEscrita.toLowerCase() == letraOculta.toLowerCase()) {
        correctos++;
      }
    }
    if (correctos == this.letrasParaAdivinar.length) {
      this.palabraAdivinada();
    }
  }

  public palabraAdivinada() {
    this.puntaje++;
    if (this.puntaje == 5) {
      this.gano = true;
    } else {
      this.clear();
      setTimeout(() => {
        this.selectItemRamdom()
      }, 400);
    }
  }

  public clear() {
    if (this.letrasParaAdivinar.length > 0) {
      console.log(this.letrasParaAdivinar);
      let i = this.letrasParaAdivinar.length - 1;
      document.getElementById(i.toString()).setAttribute("value", "");
      this.letrasParaAdivinar.pop();
      this.clear();
    }
  }

  public seleccionarTecla(letra) {
    let input: any = document.getElementById(this.indiceEnFoco);
    input.value = letra;
    if (this.letrasParaAdivinar[this.indiceEnFoco] != letra) {
      this.vidas--;
    }
    if (this.vidas != 0) {
      this.verificarLetraIngresada();
    } else {
      this.perdio = true;
    }
  }

  public verificarPorBotones(indice: string) {
    this.indiceEnFoco = indice;
  }

  public keydown(i: string, event) {
    if (event.keyCode > 57) {
      let input: any = document.getElementById(i);
      input.value = event.key;
      if (this.letrasParaAdivinar[i] != input.value.toLowerCase()) {
        this.vidas--;
      }
      if (this.vidas != 0) {
        this.verificarLetraIngresada();
      } else {
        this.perdio = true;
      }
    }
  }

}
