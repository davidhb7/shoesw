import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoCComponent } from './productos/carrito-c/carrito-c.component';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { VistaproComponent } from './productos/vistapro/vistapro.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {
    path: 'home',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule),
  },

  {path: 'vistapro', component: VistaproComponent },
  {path: 'lista-productos', component: ListaProductosComponent},
  {path: 'carrito-c', component: CarritoCComponent}

  // {
  //   path: 'producto',
  //   loadChildren: () => import('./pages/producto/producto.module').then(m => m.ProductoModule),
  //   //canActivate:[AuthGuard]
  // },
  // {path: 'cartaproducto', component: CartaproductoComponent },

  // {path:'**', redirectTo:'/sign-in', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
