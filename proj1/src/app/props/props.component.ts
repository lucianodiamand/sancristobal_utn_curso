import { Component } from '@angular/core';

@Component({
  selector: 'app-props',
  templateUrl: './props.component.html',
  styleUrls: ['./props.component.css'],
})
export class PropsComponent {
  botonHabilitado = false;
  heroImageUrl =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1920px-Tux.svg.png';
  habilitarDeshabilitar() {
    this.botonHabilitado = !this.botonHabilitado;
  }
}
