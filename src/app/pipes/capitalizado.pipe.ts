import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, todas: boolean = true): string {
        value = value.toLowerCase();
        let valores = value.split(' ');

        if (todas) {
            for (const i in valores) {
                valores[i] = valores[i][0].toUpperCase() + valores[i].substr(1);
            }
        } else {
            valores[0] = valores[0][0].toUpperCase() + valores[0].substr(1);
        }

        return valores.join(' ');
    }
}