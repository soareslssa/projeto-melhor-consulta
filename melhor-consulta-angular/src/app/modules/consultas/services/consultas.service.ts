import { Consulta } from './../../../models/consulta';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  private readonly API = 'api/consultas';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Consulta[]>(this.API);
  }

  listByEspecialidadeId(id: number) {
    return this.httpClient.get<Consulta[]>(`${this.API}/listarPorEspecialidade?espId=${id}`);
  }
}
