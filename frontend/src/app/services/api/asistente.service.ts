import { Injectable } from '@angular/core';
import { Asistente } from '../../models/asistente';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AsistenteService {
  urlBase:string = "http://localhost:3000/api/asistentes";

  constructor(private _http: HttpClient) { }

  public getAsistentes():Observable<any> {
    return this._http.get(this.urlBase);
  }

  public addAsistente(asistente: Asistente):Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(asistente);
    return this._http.post(this.urlBase, body, httpOptions);
  }

  public updateAsistente(asistente: Asistente) {
 
    console.log("asistente.service");
    return this._http.put(this.urlBase + "/" + asistente._id, asistente);
  }

  public deleteAsistente(id: any) {
    return this._http.delete(this.urlBase + "/" + id );   
  }

}