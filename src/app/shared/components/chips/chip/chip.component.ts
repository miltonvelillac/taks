import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { IonChip } from '@ionic/angular/standalone';
import { IconComponent } from '@shared/components/icon/icon.component';
import { TextComponent } from '@shared/components/text/text.component';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonChip,
    IconComponent,
    TextComponent,
  ],
})
export class ChipComponent {
  label = input('');
  removeIcon = input('cancel');
  showRemoveIcon = input(true);
  outline = input(true);

  remove$ = output<string>();

  constructor() { }

  removeChip(): void {
    this.remove$.emit(this.label());
  }

}
