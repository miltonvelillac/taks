import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '@shared/components/icon/icon.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-icon-button',
  imports: [
    MatButtonModule,
    IconComponent
  ],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconButtonComponent {
  icon = input.required<string>();
  id = input('');
  idIcon = input('');
  arialLabel = input('');
}
