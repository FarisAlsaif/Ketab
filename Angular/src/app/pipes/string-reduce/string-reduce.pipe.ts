import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringReduce'
})
export class StringReducePipe implements PipeTransform {

  transform(value:string):string {
      if(value.length >10){
        return value.substring(0,10) + '...'
      }
      else{
        return value
      }
  }
}
