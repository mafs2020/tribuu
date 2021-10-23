import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse, User } from '../interfaces/interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  isCollapsed = false;
  // users$: Observable<IResponse> = this.userService.usuariosGet$;
  // constructor(private userService: UserService) { }
  constructor() { }

  ngOnInit() {
    // this.userService.getUser().subscribe();
  }

}
