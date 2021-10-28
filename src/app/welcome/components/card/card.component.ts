import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-card',
  template: `
    <nz-card ng-col nzSpan="8" [nzTitle]="'Usuario'" [nzActions]="[actionEdit]">
      <!-- {{ user | json }} -->
      <div class="parrafos">
        <p><strong>Nombre:</strong> {{ user.name }}</p>
        <p><strong>pais:</strong> {{ user.country }}</p>
        <p><strong>rol:</strong> {{ user.role | rol }}</p>
        <button
          *ngIf="user.role === 'seller'"
          nz-button
          nzSize="default"
          nzType="primary"
        >
          Vendedor
        </button>
        <button
          *ngIf="user.role !== 'seller'"
          nz-button
          nz-danger
          nzSize="default"
          nzType="primary"
        >
          Administrador
        </button>
        <p><strong>Telefono:</strong> {{ user.phone }}</p>
      </div>
    </nz-card>
    <ng-template #actionEdit>
      <button
        style="border: 1px solid rgb(9, 113, 199); margin-right: 5px"
        nzType="default"
        nz-button
        (click)="actualizar()"
      >
        <i
          nz-icon
          nzType="edit"
          style="color: rgb(9, 113, 199)"
          nzTheme="outline"
        ></i>
      </button>
    </ng-template>
  `,
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input('user') user!: User;
  constructor(private router: Router, private userService: UserService) {}

  actualizar() {
    this.userService.crearUsuario = false;
    this.router.navigate(['welcome/usuario/', this.user._id]);
  }
}
