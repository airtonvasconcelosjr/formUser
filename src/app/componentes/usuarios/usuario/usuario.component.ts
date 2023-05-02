import { Component, Input } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {


  @Input() usuario: Usuario = {  
      id: 1,
      nome: 'Angular',
      email: 'dev@gmail.com',
      telefone: '33513030',
      cep: '72236020',
      logradouro: 'qnp 30 conjunto t',
      bairro: 'ceilandia',
      cidade: 'brasilia',
      uf: 'DF',
    }
  

  constructor() { }

  ngOnInit(): void {
  }

  larguraUsuario(): string {
    if(this.usuario.logradouro.length >= 256) {
      return 'usuario-g'
    }
    return 'usuario-p'
  }

}
