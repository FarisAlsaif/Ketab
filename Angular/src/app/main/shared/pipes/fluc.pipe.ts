import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fLUC'
})
export class FLUCPipe implements PipeTransform {

  transform(value: string): unknown {
    if (!value) return value; // Handle empty or null strings
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
