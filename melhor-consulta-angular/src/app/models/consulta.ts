import { GradeConsulta } from './gradeConsulta';
import { Medico } from './medico';
export interface Consulta{
  id: number,
  medico: Medico,
  gradeConsulta: GradeConsulta,
  horarioConsulta: string,
  dtMarcacao: string,
  situacao: string
}

export interface ConsultaRequest{
  id?: number,
  gradeId: number,
  pacienteId: number,
  situacao: string
}
