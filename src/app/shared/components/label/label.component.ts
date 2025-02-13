import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-label',
  imports: [],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelComponent {
  id = input('');
  label = input('');
  forId = input('');
}
