import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-expansion-panel',
  imports: [
    IonAccordion,
    IonAccordionGroup,
    IonItem,
  ],
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpansionPanelComponent {
  id = input<string>('');
  panelOpenState = input<boolean>(false);

  setOpenState(open: boolean): void {
    this.panelOpenState.apply(open);
  }
}
