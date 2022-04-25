import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/dominio/producto';
import { ProductoServiceService } from 'src/app/service/producto-service.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService: ProductoServiceService) { }

  ngOnInit(): void {
  }

  listarProductos(): void {
    this.productoService.consultarProductos().subscribe(data => {
      this.productos = data;
    })
  }

}
