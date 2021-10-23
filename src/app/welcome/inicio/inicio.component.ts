import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from 'src/app/interfaces/interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  users$: Observable<IResponse> = this.userService.usuariosGet$;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe();
  }

}
