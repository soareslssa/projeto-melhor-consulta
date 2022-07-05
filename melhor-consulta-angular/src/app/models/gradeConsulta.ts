import { Especialidade } from 'src/app/models/especialidade';
import { Consulta } from './consulta';
import { Medico } from './medico';
export interface GradeConsulta {
  id: number,
  paciente: number,
  medico: Medico,
  especialidade: Especialidade,
  criadoEm: string,
  situacao: boolean
  valor: number,
  consultas: Consulta[]
}

export interface GradeRequest {
  id?: number,
  espId: number,
  medicoId: number,
  valor: number
}

export interface GradeHorarioRequest {
  gradeId: number,
  espId: number,
  datasDisponiveis: String[]
}
