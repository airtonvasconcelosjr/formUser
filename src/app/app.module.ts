import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarUsuarioComponent } from './componentes/usuarios/criar-usuario/criar-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarUsuarioComponent } from './componentes/usuarios/listar-usuario/listar-usuario.component';
import { UsuarioComponent } from './componentes/usuarios/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirUsuarioComponent } from './componentes/usuarios/excluir-usuario/excluir-usuario.component';
import { EditarUsuarioComponent } from './componentes/usuarios/editar-usuario/editar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarUsuarioComponent,
    ListarUsuarioComponent,
    UsuarioComponent,
    ExcluirUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
