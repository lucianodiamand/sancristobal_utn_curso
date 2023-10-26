import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
})
export class PruebaComponent {
  valor = 'Hola';
  heroe: Hero | undefined;

  public func() {
    this.heroe = new Hero();
    this.heroe.nombre = 'superman';
  }

  public mostrarNombre() {
    return 'Luciano Diamand';
  }
}
