import { Observable } from 'rxjs';
import { EspecialidadeRequest } from './../../../models/especialidade';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Especialidade } from 'src/app/models/especialidade';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  private readonly API = 'api/especialidades';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Especialidade[]>(this.API);
  }

  add(record: EspecialidadeRequest): Observable<EspecialidadeRequest>{
    return this.httpClient.post<EspecialidadeRequest>(this.API, record);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.API}?id=${id}`);
  }

  update(especialidade: EspecialidadeRequest): Observable<any> {
    return this.httpClient.put<any>(this.API, especialidade);
  }
}


