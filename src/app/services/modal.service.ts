import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private modalService: NzModalService) {}

  modalInfoUser() {
    this.modalService.info({
      nzTitle: 'Actualizacion',
      nzContent: `se actualizo el Usuario Correctamente`,
      nzOkText: 'Ok',
      nzOkType: 'primary',
      nzOkDanger: true,
    });
  }
}
