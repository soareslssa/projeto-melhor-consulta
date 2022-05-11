import { Observable } from 'rxjs';
import { GradeRequest } from './../../../models/gradeConsulta';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GradeConsulta } from 'src/app/models/gradeConsulta';

@Injectable({
  providedIn: 'root'
})
export class GradesService {
  private readonly API = 'api/grades';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<GradeConsulta[]>(this.API);
  }

  add(grade: GradeRequest): Observable<any>{
    console.log(grade);
    return this.httpClient.post<void>(this.API, grade);
  }

}
