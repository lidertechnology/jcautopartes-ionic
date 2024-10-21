import { Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';

export const routes: Routes = [
  
  {
    path: '',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'productos', component: ProductosComponent
  },
  {
    path: 'Consejos Automotrices',
    loadComponent: () => import('./consejos-automotrices/consejos-automotrices.page').then( m => m.ConsejosAutomotricesPage)
  },
  
];
