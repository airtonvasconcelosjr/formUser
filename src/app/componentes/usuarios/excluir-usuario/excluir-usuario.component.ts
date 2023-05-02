import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-excluir-usuario',
  templateUrl: './excluir-usuario.component.html',
  styleUrls: ['./excluir-usuario.component.css']
})
export class ExcluirUsuarioComponent {


  usuario: Usuario = {
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    cep: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    uf: '',
  }

  constructor(
    private service: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((usuario) => {
      this.usuario = usuario
    })
  }

  excluirUsuario() {
    if(this.usuario.id) {
      this.service.excluir(this.usuario.id).subscribe(() => {
        this.router.navigate(['/listarUsuario'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarUsuario'])
  }


}
