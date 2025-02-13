import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-email-svg',
  imports: [],
  templateUrl: './email-svg.component.html',
  styleUrl: './email-svg.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailSvgComponent {
  width = input('30px');
  heigth = input('30px');
}
