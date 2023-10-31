import { Component, inject } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'proj3';

  private service = inject(UsuarioService);

  //constructor(private service: UsuarioService) {}

  misClases = {
    special: true,
    importante: false,
    fuente: true,
  };

  sayHello() {
    return this.service.sayHello();
  }

  cambiar() {
    this.misClases.special = !this.misClases.special;
  }
}
