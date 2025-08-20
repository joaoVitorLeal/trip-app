import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 
const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./template/template.module').then(m => m.TemplateModule), // Impotando todas as rotas do TemplateModule, carregando-a dinamicamente de forma lazy load (somente quando requisitado)
    data: { title: 'Trip App', subtitle: 'Explore, dream, and create memories everywhere' }
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
