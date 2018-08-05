import { Pipe, PipeTransform } from '@angular/core';
import { Tutor } from '../../models/tutor';

@Pipe({
  name: 'gmailFilter',
  pure: false
})
export class GmailFilterPipe implements PipeTransform {

  transform(items: any[], filter: Tutor): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.emailId.indexOf(filter.emailId) !== -1);
  }

}
