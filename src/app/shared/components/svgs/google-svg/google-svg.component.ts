import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-google-svg',
  imports: [],
  templateUrl: './google-svg.component.html',
  styleUrl: './google-svg.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoogleSvgComponent {
  width = input('30px');
  height = input('30px');
}
