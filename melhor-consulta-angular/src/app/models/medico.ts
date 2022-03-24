import { Especialidade } from './especialidade';
import { GradeConsulta } from './gradeConsulta';
export interface Medico {
  id: number,
  nome: string,
  sobrenome: string,
  nomeSocial: string,
  email: string,
  cpf: string,
  cnpj: string,
  crm: string,
  dtInicio: string,
  dtNascimento: string,
  logradouro: string,
  nroLogradouro: string,
  cep: string,
  estado: string,
  grades: GradeConsulta[],
  especialidades: Especialidade[],
  situacao: boolean
}
