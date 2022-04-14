import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './producto.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CartaproductoComponent } from './cartaproducto/cartaproducto.component';


@NgModule({
  declarations: [
    ProductoComponent,
    CartaproductoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    FormsModule,
  ]
})
export class ProductoModule { }
