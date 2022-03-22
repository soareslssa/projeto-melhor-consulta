import { Especialidade } from 'src/app/models/especialidade';
export interface Consulta{
  id: number,
  codigo: string,
  paciente: number,
  medico: {},
  especialidade: Especialidade,
  dtConsulta: string,
  situacao: boolean
}
