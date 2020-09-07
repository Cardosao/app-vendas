import {Component, OnInit} from '@angular/core';
import {Cliente} from '../cliente';
import {ClienteService} from '../../service/cliente.service';
import {Message} from '../../service/base/message';
import {Router, ActivatedRoute} from '@angular/router';
import {CodeLine} from 'tslint/lib/verify/lines';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean;
  messages: Message[];
  id: number;

  constructor(private service: ClienteService, private router: Router, private activeRoute: ActivatedRoute) {
    this.cliente = new Cliente();
    this.success = false;
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(response => {
      if (response && response.id && response.id > 0) {
        this.id = response.id;
        this.service.getClienteById(this.id)
          .subscribe(
            clienteResponse => this.cliente = clienteResponse
            , responseError2 => {
              this.success = false;
              this.messages = responseError2.error.messages;
              console.error(responseError2.error.messages);
            });
      }
    }, responseError => {
      this.success = false;
      this.messages = responseError.error.messages;
      console.error(responseError.error.messages);
    });
  }

  save(): void {
    if (this.id) {
      this.service
        .update(this.id, this.cliente)
        .subscribe(response => {
          this.success = true;
          this.messages = new Array<Message>();
          this.cliente = response;
          console.log(response);
        }, responseError => {
          this.success = false;
          this.messages = responseError.error.messages;
          console.error(responseError.error.messages);
        });
    } else {
      console.log(this.cliente);
      this.service
        .salvar(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.messages = new Array<Message>();
          this.cliente = response;
          console.log(response);
        }, responseError => {
          this.success = false;
          this.messages = responseError.error.messages;
          console.error(responseError.error.messages);
        });
    }
  }

  getClienteById(id: number): void {
    this.service.getClienteById(id).subscribe(response => {
      if (response && response instanceof Cliente) {
        console.log('Objeto', JSON.stringify(response));
        this.cliente = response;
      }
    }, responseError => {
      this.success = false;
      this.messages = responseError.error.messages;
      console.error(responseError.error.messages);
    });
  }

  voltar(): void {
    this.router.navigate(['/cliente-list']);
  }

}
