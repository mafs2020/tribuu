import { Component, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, switchMap, takeUntil, tap } from 'rxjs/operators';

import { IResponse, User } from '../../interfaces/interface';
import { UserService } from '../../services/user.service';

import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, OnDestroy {
  subjectFinish$ = new Subject<never>()
  response$: Observable<IResponse> = this.userService.usuariosGet$
    .pipe(tap(data => console.log(data)));
  constructor(
      private userService: UserService,
      private modalService: NzModalService,
      private router: Router
    ) { }
  
  ngOnInit() {
    this.userService.getUser().subscribe();
  }

  ngOnDestroy(): void {
    this.subjectFinish$.next();
    this.subjectFinish$.complete();
  }

  getDatos(event:any){
    const pagina = event.target.innerHTML as string;
    console.log('pagina :>> ', pagina);
    if(pagina.length > 1) return;
    this.userService.getUser(pagina)
      .pipe(
        distinctUntilChanged(),
        takeUntil(this.subjectFinish$),
      ).subscribe();
  }

  detalles(user:User){
    this.router.navigate(['welcome/', user._id]);
  }

  showDeleteConfirm(user:User): void {
    this.modalService.confirm({
      nzTitle: 'Eliminar',
      nzContent: `<b style="color: red;">¿esta seguro que quieres eliminar a ${user.name}?</b>`,
      nzOkText: 'Si',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.eliminar(user._id),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }


  eliminar(id:string) {
    this.userService.eliminarUsuario(id)
      .pipe(switchMap(d => this.userService.getUser()))
    .subscribe();
  }
}
