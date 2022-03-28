import { GradeConsulta } from './../../../models/gradeConsulta';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GradeConsultaService {

  private readonly API = 'api/consultas';

  constructor(private httpClient: HttpClient) { }

  listarGrades(){
    return this.httpClient.get<GradeConsulta[]>(this.API);
  }

}
