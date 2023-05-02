import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { CepServiceService } from 'src/app/cep-service.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.css']
})
export class CriarUsuarioComponent {
    cep: any;
    logradouro: any;
    localidade: any;
    bairro: any;
    uf: any;
    ddd: any;

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
    private cepService: CepServiceService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern]]
    });
  }

  

  criarUsuario() {
    this.service.criar(this.usuario).subscribe(() =>
      this.router.navigate(['/listarUsuario'])
    )
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


