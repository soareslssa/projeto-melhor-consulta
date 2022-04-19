export interface Usuario{}
export interface UsuarioAcesso{
  login: string,
  email: string,
  senha: string
}

export interface UsuarioCadastro{
  nome: string,
  sobrenome: string,
  email: string,
  senha: string,
  sexo: string,
  dtNascimento: Date
}
