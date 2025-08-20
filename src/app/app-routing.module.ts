import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { authGuard } from './auth.guard';

// 
const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
    pathMatch: 'full'
  },
  {
    path: 'pages',
    loadChildren: () => import('./template/template.module').then(m => m.TemplateModule), // Impotando todas as rotas do TemplateModule, carregando-a dinamicamente de forma lazy load (somente quando requisitado)
    canActivate: [ authGuard ] // Permite acesso apenas a usuários autenticados
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/**
 * Módulo da principal da app que hedará todas as páginas dos outros modulos da app.
 */
