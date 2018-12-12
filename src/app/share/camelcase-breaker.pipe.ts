import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcaseBreaker'
})
export class CamelcaseBreakerPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.replace(/([a-z])([A-Z])/g, '$1 $2');
  }

}
