import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = 'https://form-user-olive.vercel.app/usuarios';

  constructor(
    private http: HttpClient,
    private httpCliente: HttpClient
    ) { }

  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.API)
  }

  criar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.API, usuario)
  }

  editar(usuario: Usuario): Observable<Usuario> {
    const url = `${this.API}/${usuario.id}`
    return this.http.put<Usuario>(url, usuario)
  }

  excluir(id: number): Observable<Usuario> {
    const url = `${this.API}/${id}`
    return this.http.delete<Usuario>(url)
  }

  buscarPorId(id: number): Observable<Usuario> {
    const url = `${this.API}/${id}`
    return this.http.get<Usuario>(url)
}

  buscar(cep:String){
    return this.httpCliente.get(`https://viacep.com.br/ws/${cep}/json/`)
  }

}
