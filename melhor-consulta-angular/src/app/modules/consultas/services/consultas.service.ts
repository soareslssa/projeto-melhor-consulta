import { GradeHorarioRequest } from './../../../models/gradeConsulta';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta, ConsultaRequest } from './../../../models/consulta';

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

  listAllByMedicoGradeSituacao(medId: number, gradeId: number): Observable<Consulta[]> {

    let params = new HttpParams()
      .append('medId', medId)
      .append('gradeId', gradeId || null);

    return this.httpClient.get<Consulta[]>(`${this.API}/findAllByMedicoGrade`, { params: params });
  }

  listarConsultasPorPaciente(pacienteId: number): Observable<Consulta[]> {

    let params = new HttpParams()
      .append('pacienteId', pacienteId);

    return this.httpClient.get<Consulta[]>(`${this.API}/findByPaciente`, { params: params });
  }

  listarConsultasLivresPorMedicoGrade(medId: number, gradeId: number): Observable<Consulta[]> {
    let params = new HttpParams()
    .append('medId', medId)
    .append('gradeId', gradeId || null);

  return this.httpClient.get<Consulta[]>(`${this.API}/livres`, { params: params });
  }

  gerarHorarios(gradeHorario: GradeHorarioRequest): Observable<void>{
    return this.httpClient.post<void>(`${this.API}/horarios/gerar`, gradeHorario);
  }

  agendarConsulta(request: ConsultaRequest): Observable<void> {
    return this.httpClient.post<void>(this.API, request);
  }
}
