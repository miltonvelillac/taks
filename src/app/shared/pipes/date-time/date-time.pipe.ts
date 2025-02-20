import { DatePipe } from '@angular/common';
import { inject, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTime',
  standalone: false,
})
export class DateTimePipe implements PipeTransform {

  angularDatePipe = inject(DatePipe);

  transform(value?: string | number): string | null {
    return this.angularDatePipe.transform(value);
  }

}
