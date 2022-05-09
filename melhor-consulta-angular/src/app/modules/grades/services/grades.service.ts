import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GradeConsulta } from 'src/app/models/gradeConsulta';

@Injectable({
  providedIn: 'root'
})
export class GradesService {
  private readonly API = 'api/consultas';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<GradeConsulta[]>(this.API);
  }

}
