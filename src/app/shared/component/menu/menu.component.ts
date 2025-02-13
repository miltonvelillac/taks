import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LabelsText } from '@shared/text/labels.texts';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  labels = LabelsText.menu;

  goToToday(): void {
    
  }
}
