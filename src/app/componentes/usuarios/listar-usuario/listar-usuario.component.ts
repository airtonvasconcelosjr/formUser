import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit{

  listaUsuarios: Usuario[] = []
  constructor(private service: UsuarioService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaUsuarios) => {
      this.listaUsuarios = listaUsuarios
    })
  }

}
