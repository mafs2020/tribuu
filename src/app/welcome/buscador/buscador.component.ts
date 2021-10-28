import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEventPattern, Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} from 'rxjs/operators';
import { IResponse } from 'src/app/interfaces/interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
})
export class BuscadorComponent implements OnInit {
  response$: Observable<IResponse> = this.usuarioServices.usuariosGet$.pipe(
    tap((data) => console.log(data))
  );
  buscador: FormControl = new FormControl();
  termino: string = '';
  constructor(private usuarioServices: UserService) {}

  ngOnInit(): void {
    this.iniciarBusqueda();
  }

  iniciarBusqueda() {
    console.log('object');
    this.buscador.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap((termino) => (this.termino = termino)),
        switchMap((data) => this.usuarioServices.getUserBuscador(0, data))
      )
      .subscribe();
  }
  accion(event: number) {
    this.usuarioServices.getUserBuscador(event, this.termino).subscribe();
  }
}
