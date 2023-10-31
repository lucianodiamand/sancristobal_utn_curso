import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarios: Usuario[] = [];
  constructor() {
    this.usuarios.push(new Usuario(1, 'Luciano', 'Diamand'));
    this.usuarios.push(new Usuario(2, 'Martin', 'Caprioti'));
    this.usuarios.push(new Usuario(3, 'Joana', 'Lagos'));
  }

  getAll() {
    return this.usuarios;
  }

  get(id: number) {
    return this.usuarios.find((usuario) => {
      return usuario.id === id;
    });
  }

  sayHello() {
    return 'hola mundo';
  }
}
