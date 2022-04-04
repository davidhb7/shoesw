import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth/guards/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  { 
    path: 'home', 
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, 
  { 
    path: 'sign-in', 
    loadChildren: () => import('./pages/auth/sign-in/sign-in.module').then(m => m.SignInModule),
    canActivate:[AuthGuard]
  }, 
  { 
    path: 'sign-up', 
    loadChildren: () => import('./pages/auth/sign-up/sign-up.module').then(m => m.SignUpModule),
    canActivate:[AuthGuard]
  },

  { 
    path: 'producto', 
    loadChildren: () => import('./pages/producto/producto.module').then(m => m.ProductoModule),
    canActivate:[AuthGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
