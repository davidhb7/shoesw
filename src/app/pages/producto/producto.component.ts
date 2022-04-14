import { Component, OnInit } from '@angular/core';
import { Producto } from './model/producto';
import { ProductoService } from './service/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})



export class ProductoComponent implements OnInit {

producto:Producto=JSON.parse("{}");

  constructor(private productSvc: ProductoService) {
  }

  ngOnInit(): void {
  }



  guardarP(producto: Producto){
    this.productSvc.guardarProducto(producto).subscribe(
      data=>{
        alert("Accion exitosa")
      },
      error=>{
        alert("No se pudo, error: "+error.error)
      }
    )
  }


  actualizarP(id:number, producto: Producto){
    this.productSvc.actualizarProducto(id, producto).subscribe(
      data=>{
        alert("Accion exitosa")
      },
      error=>{
        alert("No se pudo, error: "+error.error)
      }
    )
  }


  eliminarP(id:number){
    this.productSvc.eliminarProducto(id).subscribe(
      data=>{
        alert("Accion exitosa")
      },
      error=>{
        alert("No se pudo, error: "+error.error)
      }
    )
  }

}
