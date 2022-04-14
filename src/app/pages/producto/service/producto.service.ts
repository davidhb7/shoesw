import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private _url = environment.url + "/productos/api/producto/";


  constructor(private _http: HttpClient
  ) { }

  buscarProductoId(id: any): Observable<any> {
    return this._http.get<any>(`${this._url}${id}`);
  }

  guardarProducto(request: any): Observable<any> {
    return this._http.post(`${this._url}`, request);
  }

  actualizarProducto(id: number, request: any): Observable<any> {
    return this._http.put(`${this._url}${id}/`, request);
  }
  eliminarProducto(request: any): Observable<any> {
    return this._http.delete(`${this._url}`, request);
  }

  listarProducto(): Observable<any> {
    return this._http.get<any>(`${this._url}`);
  }
}
