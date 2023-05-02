import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarUsuarioComponent } from './componentes/usuarios/criar-usuario/criar-usuario.component';
import { ListarUsuarioComponent } from './componentes/usuarios/listar-usuario/listar-usuario.component';
import { ExcluirUsuarioComponent } from './componentes/usuarios/excluir-usuario/excluir-usuario.component';
import { EditarUsuarioComponent } from './componentes/usuarios/editar-usuario/editar-usuario.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'listarUsuario',
    pathMatch: 'full'
  },
  {
    path:'criarUsuario',
    component: CriarUsuarioComponent
  },
  {
    path:'listarUsuario',
    component: ListarUsuarioComponent
  },
  {
    path:'usuarios/excluirUsuario/:id',
    component: ExcluirUsuarioComponent
  },
  {
    path:'usuarios/editarUsuario/:id',
    component: EditarUsuarioComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
