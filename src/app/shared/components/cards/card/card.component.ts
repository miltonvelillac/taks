import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader } from '@ionic/angular/standalone';

@Component({
  selector: 'app-card',
  imports: [
    IonCard,
    IonCardContent,
    IonCardHeader,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  appearance = input('outlined');
}
