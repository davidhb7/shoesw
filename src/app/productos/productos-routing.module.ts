import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoCComponent } from './carrito-c/carrito-c.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { VistaproComponent } from './vistapro/vistapro.component';

const routes: Routes = [
  {path:'listaProductos', component: ListaProductosComponent},
  {path: 'vistapro', component: VistaproComponent},
  {path:'carrito-c',component:CarritoCComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
