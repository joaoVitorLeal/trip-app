import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

// Definindo as rotas de acesso
const routes: Routes = [
  {
    path: '', // caminho de url
    component: LayoutComponent,
    children: [ // Definindo as rotas filhas (array) do LayoutComponent
      {
        path: 'categories',
        loadChildren: () => import('../categories/categories.module').then(m => m.CategoriesModule),
        pathMatch: 'full',
        data: { title: 'Categories', subtitle: 'Register the new categories' } // Capturar eventos para definir título e subtítulo de cada página @See LayoutComponent & LayoutProps
      },
      {
        path: 'places',
        loadChildren: () => import('../places/places.module').then(m => m.PlacesModule),
        pathMatch: 'full',
        data: { title: 'Places', subtitle: 'Register the new places' }
      },
      {
        path: 'gallery',
        loadChildren: () => import('../gallery/gallery.module').then(m => m.GalleryModule),
        pathMatch: 'full',
        data: { title: 'Gallery', subtitle: 'Discover the perfect place for unforgettable moments' }
      }
    ]
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
