import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClienteI } from '../cliente';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css'],
})
export class ClientDetailComponent {
  @Input() clienteArg!: ClienteI | undefined;
  @Output() mensajeBorrar = new EventEmitter<number>();

  borrar() {
    this.mensajeBorrar.emit(this.clienteArg?.id);
  }
}
