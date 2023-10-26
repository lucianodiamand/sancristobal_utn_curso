import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero.detail.component.html',
  styleUrls: ['./hero.detail.component.css'],
})
export class HeroDetailComponent {
  @Input() hero!: Hero;
  @Output() mensaje = new EventEmitter<string>();

  func() {
    this.hero.nombre = 'Spiderman';
    this.mensaje.emit('Tela de araña');
  }
}
