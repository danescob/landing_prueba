import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnvioService {

  URL_BASE: string = `${environment.API_URL}/enviar`;

  constructor(
    private http: HttpClient
  ) { }

  create(formulario: any) {

    return this.http.post(this.URL_BASE, formulario)
      .pipe(map( response => {
        return response;
      } ));

  }
}
