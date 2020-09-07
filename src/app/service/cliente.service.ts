import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Cliente} from '../cliente/cliente';
import {Observable} from 'rxjs';
import {Page} from './base/page';
import {Pageable} from './base/pageable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {
  }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8081/api/clientes', cliente);
  }

  update(id: number, cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>('http://localhost:8081/api/clientes/' + id, cliente);
  }

  listaTodos(pageable: Pageable): Observable<Page<Cliente>> {
    const url = 'http://localhost:8081/api/clientes'
      + '?page=' + pageable.pageNumber
      + '&size=' + pageable.pageSize
      + '&sort=id';
    return this.http.get<Page<Cliente>>(url, httpOptions);
  }

  getClienteById(id: number): Observable<Cliente> {
    const url = 'http://localhost:8081/api/clientes/' + id;
    return this.http.get<Cliente>(url);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:8081/api/clientes/' + id);
  }

}
