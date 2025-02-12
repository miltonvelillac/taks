import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-expansion-panel',
  imports: [MatExpansionModule],
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpansionPanelComponent {
  panelOpenState = input<boolean>(false);

  setOpenState(open: boolean): void {
    this.panelOpenState.apply(open);
  }
}
