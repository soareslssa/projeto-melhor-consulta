import { Consulta } from './consulta';
import { Medico } from './medico';
import { Especialidade } from 'src/app/models/especialidade';
export interface GradeConsulta{
  id: number,
  paciente: number,
  medico: Medico,
  especialidade: Especialidade,
  criadoEm: string,
  situacao: boolean
  valor: number,
  consultas: Consulta[]
}

export interface GradeRequest{
  id?: number,
  espId: number,
  medicoId: number,
  tempoConsulta: number,
  dtConsulta: string[],
  hrInicio: string,
  hrFim: string
}
