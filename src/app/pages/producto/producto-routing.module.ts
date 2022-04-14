import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaproductoComponent } from './cartaproducto/cartaproducto.component';
import { ProductoComponent } from './producto.component';

const routes: Routes =[
  {path: '', component: ProductoComponent, children:[{path: 'cartaproducto', component: CartaproductoComponent }] },]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
  ]
})
export class ProductoRoutingModule { }
