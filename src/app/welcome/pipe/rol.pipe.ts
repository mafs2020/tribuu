import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rol',
})
export class RolPipe implements PipeTransform {
  transform(value: string): string {
    if (value == 'seller') {
      return 'vendedor';
    }
    return 'administrador';
  }
}
