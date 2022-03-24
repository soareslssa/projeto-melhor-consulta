import { Medico } from './medico';
export interface Especialidade {
  id: number,
  sigla: string,
  descricao: string,
  medico: Medico,
  situacao: boolean

}
