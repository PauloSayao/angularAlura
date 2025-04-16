import { Routes } from '@angular/router';
import { CriarPensamentosComponent } from './componentes/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';

export const routes: Routes = [{
  path:'',
  redirectTo: 'listarPensamentos',
  pathMatch:'full'
},
{
    path: 'criarPensamentos',
    component: CriarPensamentosComponent
},
{
    path: 'listarPensamentos',
    component: ListarPensamentosComponent
}
];
