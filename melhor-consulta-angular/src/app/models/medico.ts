import { Consulta } from './consulta';
import { Especialidade } from 'src/app/models/especialidade';
export interface Medico {
  id: number,
  nome: string,
  email: string,
  cpf: string,
  cnpj: string,
  crm: string,
  dtInicio: string,
  dtNascimento: string,
  endereco: string,
  consultas: Consulta[]
  situacao: boolean
}
