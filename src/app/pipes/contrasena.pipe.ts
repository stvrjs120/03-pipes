import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, apply: boolean = true): string {
    if (apply) {
      value = '*'.repeat(value.length);
    }

    return value;
  }

}
