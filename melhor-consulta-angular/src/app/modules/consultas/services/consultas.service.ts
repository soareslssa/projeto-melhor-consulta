import { HttpClient, HttpParams } from '@angular/common/http';
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

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API}?id=${id}`);
  }

  listAllByMedicoGradeSituacao(mediId: number, gradeId: number, sitCodigo: string): Observable<Consulta[]> {

    let params = new HttpParams()
      .append('medId', mediId)
      .append('gradeId', gradeId)
      .append('sitCodigo', sitCodigo);

    return this.httpClient.get<Consulta[]>(`${this.API}/findAllByMedicoGradeSituacao`, { params: params });
  }
}
