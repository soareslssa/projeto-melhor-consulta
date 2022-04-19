import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioAcesso, UsuarioCadastro } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AcessoService {

  private readonly API = 'api/acesso';

  constructor(private http: HttpClient) {}

  cadastrarUsuarioPaciente(usuario: UsuarioCadastro): Observable<UsuarioCadastro> {
    console.log(usuario);
    return this.http.post<UsuarioCadastro>(`${this.API}/cadastrarUsuario`, usuario);
  }

  logar(usuario: UsuarioAcesso): Observable<UsuarioAcesso> {
   return this.http.post<UsuarioAcesso>(`${this.API}/login`, usuario);
  }
}
