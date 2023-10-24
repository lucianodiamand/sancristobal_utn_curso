import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
})
export class PruebaComponent {
  valor = 'Hola';
  heroe: Hero = new Hero();

  public func() {
    this.valor = 'Chau';
  }

  public mostrarNombre() {
    return 'Luciano Diamand';
  }
}
