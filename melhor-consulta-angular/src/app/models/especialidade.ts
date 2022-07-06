import { Medico } from './medico';
export interface Especialidade {
  id: number,
  sigla: string,
  descricao: string,
  medico: Medico,
  situacao: boolean

}

export interface EspecialidadeRequest{
  id: number,
  sigla: string,
  descricao: string,
  situacao: boolean,
  medicoId: number
}
