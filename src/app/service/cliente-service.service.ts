import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Cliente } from '../dominio/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  private url: string = environment.urlBase+"/api/v1/cliente";

  constructor(public httpClient: HttpClient) { }

  crearCliente(cliente: Cliente): Observable<Cliente>{
    return this.httpClient.post<Cliente>(`${this.url}`, cliente).pipe(
      catchError(e => {
        Swal.fire(
          'Error al crear cliente',
          e.error.error[0],
          'error'
        );
        return throwError(e);
      })
    );
  }

  consultarCliente(cliente: Cliente): Observable<Cliente>{
    return this.httpClient.post<Cliente>(`${this.url}/consultarCliente`, cliente).pipe(
      catchError(e => {
        Swal.fire(
          'Error al consultar cliente',
          e.error,
          'error'
        );
        return throwError(e);
      })
    );
  }
}
