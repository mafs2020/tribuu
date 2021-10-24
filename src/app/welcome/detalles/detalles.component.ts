import { Component, OnInit } from '@angular/core';

import { Country, User } from 'src/app/interfaces/interface';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { environment } from 'src/environments/environment';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {
  user$?: Observable<User>;
  formulario?: FormGroup;
  moneda= false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        if(!params.has('id')){
          this.router.navigate(['/welcome']);
        }
        const id = params.get('id')!;
        return this.userService.getUserA(`${environment.server}/users/${id}`);
      })
    );
    this.iniciarFormulario();
    this.agregar();
  }

  iniciarFormulario() {
    this.formulario = this.fb.group({
      _id: ['', Validators.required],
      role: ['', Validators.required],
      language: this.fb.array([this.lenguajes()]),
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

  lenguajes(): FormGroup {
    return this.fb.group({
      lenguaje: ['', Validators.required]
    });
  }

  addLenguajes(): void {
    //aqui accesas al getter de direcciones
    this.lenguajesGET.push(this.lenguajes());
  }

  
  get lenguajesGET(): FormArray {
    // tienes que acceder al valor del formGroup original
    // para regresar su valor total me imagino que el largo del arreglo
    return <FormArray>this.formulario?.get('language');
  }

  submitForm() {
    console.log(this.formulario?.value);
  }

  removeSkill(i:number){
    this.lenguajesGET.removeAt(i);
  }
  
  agregar(){
    this.formulario?.get('country')?.valueChanges
    .pipe(tap(data => this.setterarValores()))
      .subscribe(data => console.log(data));
    
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

  setterarValores(){
    this.moneda != this.moneda;
    this.formulario?.get('currency')?.setValue({
      code: "MXN",
      name: "Mexican peso",
      symbol: "$"
    });
    
    this.formulario?.get('countryCodeName')?.setValue("MX");
    this.formulario?.get('countryCode')?.setValue("+52");
  }

}