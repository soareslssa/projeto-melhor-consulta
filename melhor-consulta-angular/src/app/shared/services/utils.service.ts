import { Estado } from './../../models/estado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private readonly API_ESTADOS = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

  constructor(private httpClient: HttpClient) { }

  listarEstados(){
    return this.httpClient.get<Estado[]>(this.API_ESTADOS);
  }
}
