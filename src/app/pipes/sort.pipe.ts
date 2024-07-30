import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: any[], column: string, direction: string): any[] {
    if (!array || !column || !direction) return array;

    return array.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];
      if (valueA < valueB) {
        return direction === 'asc' ? -1 : 1;
      } else if (valueA > valueB) {
        return direction === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}
