import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Producto } from '../dominio/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  private url: string = environment.urlBase+"/api/v1/producto";

  constructor(public httpClient: HttpClient) { }

  crearProducto(producto: Producto): Observable<Producto>{
    return this.httpClient.post<Producto>(`${this.url}`, producto).pipe(
      catchError(e => {
        Swal.fire(
          'Error al crear producto',
          e.error.error[0],
          'error'
        );
        return throwError(e);
      })
    );
  }

  consultarProductos(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.url}`).pipe(
      catchError(e => {
        Swal.fire(
          'Error al consultar producto',
          e.error,
          'error'
        );
        return throwError(e);
      })
    );
  }
}
