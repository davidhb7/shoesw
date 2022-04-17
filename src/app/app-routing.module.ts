import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
