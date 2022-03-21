import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  constructor(HttpClient: HttpClient) { }

  list() {
    return [{nome: 'Cardiologia'}, {nome: 'Psicologia'}, {nome: 'Psiquiatria'}];
  }
}


