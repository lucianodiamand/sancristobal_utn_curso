export interface ClienteI {
  id: number;
  nombre: string;
  apellido: string;
  vip: boolean;
}

export class Cliente implements ClienteI {
  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public vip: boolean
  ) {}
}
