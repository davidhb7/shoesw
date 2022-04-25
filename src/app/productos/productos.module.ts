import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { SharedModule } from '@shared/shared.module';
import { VistaproComponent } from './vistapro/vistapro.component';
import { CarritoCComponent } from './carrito-c/carrito-c.component';


@NgModule({
  declarations: [
    ListaProductosComponent,
    VistaproComponent,
    CarritoCComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    SharedModule
  ]
})
export class ProductosModule { }
