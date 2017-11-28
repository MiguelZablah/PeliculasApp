import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divide'
})
export class DividePipe implements PipeTransform {

  transform(number:number, amount:number):number {
    return number/amount;
  }

}
