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
}


