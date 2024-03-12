import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceWord'
})
export class SliceWordPipe implements PipeTransform {

  transform(value: string, limit:number): string {
    const word=value.split('');
    if(word.length>limit)
    {
      return word.slice(0,limit).join(' ')+'...';
    }
    return value;
  }

}
