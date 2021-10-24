import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { IResponse } from 'src/app/interfaces/interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, OnDestroy {
  subjectFinish$ = new Subject<never>()
  response$: Observable<IResponse> = this.userService.usuariosGet$
    .pipe(tap(data => console.log(data)));
  constructor(private userService: UserService) { }
  
  ngOnInit() {
    this.userService.getUser().subscribe();
  }

  ngOnDestroy(): void {
    this.subjectFinish$.next();
    this.subjectFinish$.complete();
  }

  imprimir(event:any){
    const pagina = event.target.innerHTML as string;
    if(pagina.length > 1) return;
    this.userService.getUser(pagina)
      .pipe(
        takeUntil(this.subjectFinish$),
      ).subscribe();
  }

}