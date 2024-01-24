import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hectogram',
  standalone: true
})
export class HectogramPipe implements PipeTransform {

  transform(value: number, factor: number): number {
    return (value * 10)/factor;
  }

}
