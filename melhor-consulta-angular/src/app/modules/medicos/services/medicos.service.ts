import { Medico } from './../../../models/medico';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicosService {
  private readonly API = 'api/medicos';

  constructor(private http: HttpClient) {}

  obterMedicoPorId(id: number): Observable<Medico> {
    return this.http.get<Medico>(`${this.API}/${id}`);
  }
}
