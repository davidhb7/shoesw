import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductoService } from '../service/producto.service';

@Component({
  templateUrl: './cartaproducto.component.html',
  styleUrls: ['./cartaproducto.component.scss']
})
export class CartaproductoComponent implements OnInit {


  listaProductos:Producto[]=[]

  constructor(private productoService:ProductoService) {
    this.iniciarListaP();
  }

  ngOnInit(): void {
  }
  iniciarListaP(){
    this.productoService.listarProducto().subscribe(
      data=>{
        this.listaProductos=data as Producto[]
      },
      error=>{

      }
    )
  }
}
