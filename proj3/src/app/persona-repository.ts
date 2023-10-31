import { inject } from '@angular/core';
import { Connection, ConnectionImpl } from './connection';

// Implementa los CRUD de persona
export class PersonaRepository {
  // private conn2 = inject(Connection);

  constructor(private conn: Connection) {}

  insertar() {}

  actualizar() {}

  borrar() {}

  recuperar() {}
}
