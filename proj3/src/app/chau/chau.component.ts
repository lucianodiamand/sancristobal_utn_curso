import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-chau',
  templateUrl: './chau.component.html',
  styleUrls: ['./chau.component.css'],
})
export class ChauComponent implements OnInit {
  usuario!: Usuario | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: UsuarioService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.usuario = this.service.get(+id);
    }
  }
}
