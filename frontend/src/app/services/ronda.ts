import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pedido {
  id?: number;
  participante: string;
  producto: string;
  precio?: number;
}

export interface RondaDto {
  id?: number;
  creador: string;
  lugar: string;
  horaSalida: string;
  telefonoBizum: string;
  descripcion: string;
  activa?: boolean;
  pedidos?: Pedido[];
}

@Injectable({
  providedIn: 'root',
})
export class Ronda {
  private readonly apiUrl = 'http://localhost:8080/api/rondas';

  constructor(private readonly http: HttpClient) {}

  getRondas(): Observable<RondaDto[]> {
    return this.http.get<RondaDto[]>(this.apiUrl);
  }

  createRonda(ronda: RondaDto): Observable<RondaDto> {
    return this.http.post<RondaDto>(this.apiUrl, ronda);
  }

  addPedido(rondaId: number, pedido: Pedido): Observable<RondaDto> {
    return this.http.post<RondaDto>(`${this.apiUrl}/${rondaId}/pedidos`, pedido);
  }

  closeRonda(rondaId: number): Observable<RondaDto> {
    return this.http.put<RondaDto>(`${this.apiUrl}/${rondaId}/cerrar`, {});
  }
}
