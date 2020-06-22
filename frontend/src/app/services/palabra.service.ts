import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalabraService {

  palabras: Array<any>;

  constructor() { 
    this.palabras = new Array();
  }

  cargarPalabras() {
    this.palabras.push({ palabraEspaniol: 'leon', palabraIngles: 'lion', urlimagen: 'https://vignette.wikia.nocookie.net/reinoanimalia/images/b/b5/Le%C3%B3n_wiki2.png/revision/latest?cb=20130303082204&path-prefix=es' })
    this.palabras.push({ palabraEspaniol: 'gato', palabraIngles: 'cat', urlimagen: 'https://i.pinimg.com/736x/db/78/dc/db78dca6680118a0f38c8aab5a06b87d.jpg' })
    this.palabras.push({ palabraEspaniol: 'lobo', palabraIngles: 'wolf', urlimagen: 'https://www.caracteristicas.co/wp-content/uploads/2018/09/lobo-1-e1580435761506.jpg' })
    this.palabras.push({ palabraEspaniol: 'perro', palabraIngles: 'dog', urlimagen: 'https://www.pregonagropecuario.com/assets/images/upload/perro_dogo_argentino.jpg' })
    this.palabras.push({ palabraEspaniol: 'tiburon', palabraIngles: 'shark', urlimagen: 'https://okdiario.com/img/2019/06/20/cuanto-vive-un-tiburon-blanco-655x368.jpg' })
    this.palabras.push({ palabraEspaniol: 'oveja', palabraIngles: 'sheep', urlimagen: 'https://www.conclusion.com.ar/wp-content/uploads/2015/09/ovejas-editada.jpg' })
    this.palabras.push({ palabraEspaniol: 'conejo', palabraIngles: 'rabbit', urlimagen: 'https://www.carrefour.es/crs/cdn_static/promo-content/Carrefour/contenidos/mascotas/apareamiento-conejos-2.jpg' })
    this.palabras.push({ palabraEspaniol: 'pato', palabraIngles: 'duck', urlimagen: 'https://bmeditores.mx/wp-content/uploads/2019/12/WQHZA3YTYZE7TLW734FJ5AGPDI.jpg' })
    this.palabras.push({ palabraEspaniol: 'cerdo', palabraIngles: 'pig', urlimagen: 'https://ep00.epimg.net/elpais/imagenes/2014/10/08/buenavida/1412766626_849373_1412938902_noticia_normal.jpg' })
    this.palabras.push({ palabraEspaniol: 'gallina', palabraIngles: 'chicken', urlimagen: 'https://www.mendozapost.com/files/image/111/111637/589aeb9bc33ea.jpg' })
  }

  listarPalabras() {
    return this.palabras;
  }

}