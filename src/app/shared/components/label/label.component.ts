import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-label',
  imports: [
    IonLabel,
  ],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelComponent {
  id = input('');
  label = input('');
  forId = input('');
  complement = input(':');
  showComplement = input(true);
}
