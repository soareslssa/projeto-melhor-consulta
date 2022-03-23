import { Medico } from './medico';
import { Especialidade } from 'src/app/models/especialidade';
export interface Consulta{
  id: number,
  codigo: string,
  paciente: number,
  medico: Medico,
  especialidade: Especialidade,
  dtConsulta: string,
  situacao: boolean
}
