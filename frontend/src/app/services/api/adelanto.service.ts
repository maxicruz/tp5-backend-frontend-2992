import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adelanto } from 'src/app/models/adelanto';

@Injectable({
  providedIn: 'root'
})
export class AdelantoService {
  URL: string = "http://localhost:3000/api/adelantos";
  
  constructor(private _http: HttpClient) { }

  public getAdelantos():Observable<any> {
    return this._http.get(this.URL);
  }

  public addAdelanto(adelantos: Adelanto):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(adelantos);

    return this._http.post(this.URL, body, httpOptions);
  }

  public updateAdelanto(adelantos: Adelanto) {
    return this._http.put(this.URL + "/" + adelantos._id, adelantos);
  }

  public deleteAdelanto(id: any) {
    return this._http.delete(this.URL + "/" + id);
  }
}
