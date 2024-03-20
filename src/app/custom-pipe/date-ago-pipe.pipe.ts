import { Pipe, PipeTransform } from '@angular/core';

interface Intervals {
  [key: string]: number;
}
@Pipe({
  name: 'dateAgoPipe'
})
export class DateAgoPipePipe implements PipeTransform {

  transform(value: any): any {
    if (!value) return null; // Check if value is provided

    const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
    const intervals: Intervals = {
      'year': 31536000,
      'month': 2592000,
      'week': 604800,
      'day': 86400,
      'hour': 3600,
      'minute': 60,
      'second': 1
    };

    for (const interval in intervals) {
      if (intervals.hasOwnProperty(interval)) {
        const counter = Math.floor(seconds / intervals[interval]);
        if (counter > 0) {
          if (counter === 1) {
            return counter + ' ' + interval + ' ago'; // singular (1 day ago)
          } else {
            return counter + ' ' + interval + 's ago'; // plural (2 days ago)
          }
        }
      }
    }
    return 'Just now'; // If less than a second, show 'Just now'
  }

}
