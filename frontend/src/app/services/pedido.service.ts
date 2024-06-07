import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators'
import { Pedido } from '../interfaces/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private myAppUrl: string
  private myApiUrl: string
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint
    this.myApiUrl = 'api/pedidos/'
  }
  getListPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.myAppUrl}${this.myApiUrl}`).pipe(
      catchError(error => {
        console.error('Error al obtener lista de pedidos: ', error);
        return throwError(error)
      })
    )
  }
  getPedido(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.myAppUrl}${this.myApiUrl}${id}`).pipe(
      catchError((e) => {
        console.error('Error al obtener pedido: ', e);
        return throwError(e)
      })
    )
  }

  deletePedido(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }
  postPedido(pedido: Pedido): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, pedido)
  }
  updatePedido(pedido: Pedido, id: number): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, pedido)
  }
}
