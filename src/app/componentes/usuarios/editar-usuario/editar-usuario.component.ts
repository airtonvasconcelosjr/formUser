import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario';
import { CepServiceService } from 'src/app/cep-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {

  usuario: Usuario = {
    nome: '',
    email: '',
    telefone: '',
    cep: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    uf: '',
  }

  formulario!: FormGroup;
  constructor(
    private service: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private cepService: CepServiceService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((usuario) => {
      this.usuario = usuario
    })
  }

  editarUsuario() {
    this.service.editar(this.usuario).subscribe(() => {
      this.router.navigate(['/listarUsuario'])
    })

  }

  cancelar() {
    this.router.navigate(['/listarUsuario'])
  }
  buscarEnderecoPorCep() {
    const cep = this.usuario.cep;
    if (cep && cep.length === 8) {
      this.cepService.buscar(cep).subscribe((endereco: any) => {
        this.usuario.logradouro = endereco.logradouro;
        this.usuario.bairro = endereco.bairro;
        this.usuario.cidade = endereco.localidade;
        this.usuario.uf = endereco.uf;
      });
    }
  }


}