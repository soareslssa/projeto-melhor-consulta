import { Consulta } from './consulta';
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
  cep: string,
  uf: string,
  consultas: Consulta[]
  situacao: boolean
}
