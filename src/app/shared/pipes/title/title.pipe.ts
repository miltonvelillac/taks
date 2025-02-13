import { TitleCasePipe } from '@angular/common';
import { inject, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appTitle',
  standalone: false,
})
export class TitlePipe implements PipeTransform {

  titleCasePipe = inject(TitleCasePipe);

  transform(value: string): unknown {
    return this.titleCasePipe.transform(value);
  }

}
