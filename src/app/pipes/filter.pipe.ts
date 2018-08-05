import { Pipe, PipeTransform } from '@angular/core';
import { Tutor } from '../../models/tutor';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filter: Tutor): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.subjectAssigned.indexOf(filter.subjectAssigned) !== -1);
  }

}
