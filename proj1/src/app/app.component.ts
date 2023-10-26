import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'proj2';
  currentHero = new Hero();

  constructor() {
    this.currentHero.id = 3;
    this.currentHero.nombre = 'Batman';
    this.currentHero.vuela = false;
  }

  actualizar(event: string) {
    this.title = event;
  }
}
