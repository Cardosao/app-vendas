import {Component, OnInit} from '@angular/core';
import {Cliente} from '../cliente';
import {ClienteService} from '../../service/cliente.service';
import {Message} from '../../service/base/message';
import {Page} from '../../service/base/page';
import {Pageable} from '../../service/base/pageable';
import {CustomPaginationService} from '../../service/custom-pagination.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  page: Page<Cliente> = new Page();
  success: boolean;
  errors: boolean;
  messages: Array<Message>;
  clienteSelecionado: Cliente;

  constructor(
    private service: ClienteService,
    private paginationService: CustomPaginationService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  carregaCliente(clienteSelecionado: Cliente): void {
    this.clienteSelecionado = clienteSelecionado;
    console.log('Objeto', JSON.stringify(this.clienteSelecionado));
  }

  deletarCliente(clienteSelecionado: Cliente): void {
    this.clienteSelecionado = clienteSelecionado;
    console.log('Deletando', JSON.stringify(this.clienteSelecionado));
    this.service
      .delete(clienteSelecionado.id)
      .subscribe(
        response => {
          this.success = true;
          this.messages = new Array<Message>();
          console.log(response);
          this.getData();
        },
          responseError => {
            this.errors = true;
            this.messages = responseError.error.messages;
            console.error(responseError.error.messages);
          });
  }

  private getData(): void {
    this.service.listaTodos(this.page.pageable)
      .subscribe(page => this.page = page);
    console.log(this.page);
  }

  public getNextPage(): void {
    this.page.pageable = this.paginationService.getNextPage(this.page);
    this.getData();
  }

  public getPreviousPage(): void {
    this.page.pageable = this.paginationService.getPreviousPage(this.page);
    this.getData();
  }

  public getPageInNewSize(pageSize: number): void {
    this.page.pageable = this.paginationService.getPageInNewSize(this.page, pageSize);
    this.getData();
  }

  public getPage(pageNumber: number, pageSize: number): void {
    this.page.pageable = this.paginationService.getPage(this.page, pageNumber, pageSize);
    console.log('PAGE', this.page);
    this.getData();
  }

}
