import { Medico } from './medico';
export interface Especialidade {
  id: number,
  descricao: string,
  medico: Medico,
  situacao: boolean

}
