import { Component } from '@angular/core';
import { Cliente, ClienteI } from './cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'proj2';

  clientes: ClienteI[] = [];
  clienteSeleccionado: ClienteI | undefined;

  constructor() {
    this.clientes.push(new Cliente(1, 'Luciano', 'Diamand', false));
    this.clientes.push(new Cliente(2, 'Martina', 'Katz', true));
    this.clientes.push(new Cliente(3, 'Carlos', 'Perez', false));
  }

  seleccionarCliente(cliente: ClienteI) {
    this.clienteSeleccionado = cliente;
  }

  borrarRegistro($event: number) {
    this.clientes = this.clientes.filter((cliente) => {
      return cliente.id !== $event;
    });
    this.clienteSeleccionado = undefined;
  }
}
