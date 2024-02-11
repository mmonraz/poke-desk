import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimeter',
  standalone: true
})
export class DecimeterPipe implements PipeTransform {

  transform(value: number): number {
    return value/10;
  }

}
