import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

// rxjs
import { Observable, Subject } from 'rxjs';
import { delay, switchMap, takeUntil, tap } from 'rxjs/operators';

// services
import { UserService } from '../../services/user.service';
import { NzModalService } from 'ng-zorro-antd/modal';

import { environment } from 'src/environments/environment';
import { User } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit, OnDestroy {
  user?: User;
  pais?: string;
  finalizarObser = new Subject<never>();
  formulario?: FormGroup;
  cargando = false;
  monedas = [
    { code: 'MXN', name: 'Mexican peso', symbol: '$' },
    { code: 'US', name: 'Dollar EUA', symbol: '$' },
  ];
  lenguas = ['español', 'ingles', 'chino', 'frances'];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public userService: UserService,
    private modalService: NzModalService,
    private fb: FormBuilder
  ) {}
  ngOnDestroy(): void {
    this.finalizarObser.next();
    this.finalizarObser.complete();
  }

  ngOnInit(): void {
    this.iniciarFormulario();
    this.userService.crearUsuario! ? '' : this.getUser();

    this.agregar();
  }
  getUser() {
    console.log('object');
    this.route.paramMap
      .pipe(
        takeUntil(this.finalizarObser),
        switchMap((params: ParamMap) => {
          const id = params.get('id')!;
          return this.userService.getUserA(`${environment.server}/users/${id}`);
        }),
        tap((data) => {
          this.userService.crearUsuario!
            ? ''
            : this.formulario?.patchValue(data);
        })
      )
      .subscribe();
  }

  iniciarFormulario() {
    this.formulario = this.fb.group({
      _id: '',
      role: ['', Validators.required],
      language: [[]],
      // language: this.fb.array([]),
      // language: this.fb.array([this.lenguajes()]),
      email: ['', Validators.email],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: '',
      currency: this.fb.group({
        code: ['', Validators.required],
        name: ['', Validators.required],
        symbol: ['', Validators.required],
      }),
      country: ['', Validators.required],
      countryCode: ['', Validators.required],
      countryCodeName: ['', Validators.required],
    });
  }

  // lenguajes(lengua?: string): FormGroup {
  //   return this.fb.group({
  //     lenguaje: [lengua ?? '', Validators.required],
  //   });
  // }

  // addLenguajes(lengua?: string): void {
  //aqui accesas al getter de direcciones
  //   this.lenguajesGET.push(this.lenguajes(lengua ?? ''));
  // }

  // get lenguajesGET(): FormArray {
  // tienes que acceder al valor del formGroup original
  // para regresar su valor total me imagino que el largo del arreglo
  //   return <FormArray>this.formulario?.get('language');
  // }

  submitForm() {
    this.userService.crearUsuario ? this.crear() : this.actualizar();
  }

  crear() {
    this.userService
      .crearUsuarioObser(this.formulario?.value)
      .pipe(
        takeUntil(this.finalizarObser),
        delay(500),
        tap((d) => {
          this.cargando = !this.cargando;
          this.modalActualizacion();
        })
      )
      .subscribe();
  }
  actualizar() {
    this.userService
      .actualizarUser(this.formulario?.value)
      .pipe(
        takeUntil(this.finalizarObser),
        delay(500),
        tap((d) => {
          this.cargando = !this.cargando;
          this.modalActualizacion();
          this.router.navigate(['/welcome']);
        })
      )
      .subscribe();
  }

  removeSkill(i: number) {
    console.log('i :>> ', i);
    // this.lenguajesGET.removeAt(i);
  }

  agregar() {
    this.formulario
      ?.get('country')
      ?.valueChanges.pipe(tap((data) => this.setterarValores()))
      .subscribe((data) => console.log(data));

    // if(moneda.includes('pesos')){
    // this.formulario?.get('currency')?.setValue({
    //   code: "MXN",
    //   name: "Mexican peso",
    //   symbol: "$"
    // });
    // }

    // "_id": "6027129ae8082843808eaa21",
    // "role": "seller",
    // "language": [
    // "Español",
    // "Inglés"
    // ],
    // "email": "micorreo@gmail.com",
    // "name": "Jonh",
    // "lastname": "Doe",
    // "currency": {
    // "code": "MXN",
    // "name": "Mexican peso",
    // "symbol": "$"
    // },
    // "country": "Mexico",
    // "countryCode": "+52",
    // "countryCodeName": "MX",
    // "phone": "5555555555"
    // }
  }

  setterarValores() {
    this.formulario?.get('currency')?.setValue({
      code: 'MXN',
      name: 'Mexican peso',
      symbol: '$',
    });

    this.formulario?.get('countryCodeName')?.setValue('MX');
    this.formulario?.get('countryCode')?.setValue('+52');
  }

  get control(): AbstractControl {
    // this.formulario?.get('currency')!.touched
    return this.formulario?.get('currency')!;
  }

  modalActualizacion() {
    this.modalService.info({
      nzTitle: 'Actualizar',
      nzContent: `se actualizo correctamene`,
      nzOkText: 'Ok',
      nzOkType: 'primary',
      nzOnOk: () => console.log('object'),
    });
  }
}
