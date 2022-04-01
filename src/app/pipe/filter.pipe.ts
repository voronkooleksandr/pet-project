import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsFilter',
})
export class FilterPipe implements PipeTransform {
  transform(newsList: any[], filterString: string, fieldName: string): any[] {
    if (newsList.length === 0 || filterString === '' || fieldName === '') {
      return newsList;
    }
    return newsList.filter(
      (news) =>
        news[fieldName]
          .trim()
          .toLocaleLowerCase()
          .lastIndexOf(filterString.toLocaleLowerCase()) !== -1
    );
  }
}
