import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from './../../../models/consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  private readonly API = 'api/consultas';

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Consulta[]> {
    return this.httpClient.get<Consulta[]>(this.API);
  }

}
