import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';
import { IconComponent } from '@shared/components/icon/icon.component';
import { ButtonColorType } from '@shared/types/button-color.type';
import { ButtonFillType } from '@shared/types/button-fill.type';

@Component({
  selector: 'app-button',
  imports: [
    IonButton,
    IconComponent,
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  id = input<string>('');
  label = input<string>('');
  icon = input<string>('');
  fill = input<ButtonFillType | undefined>(undefined);
  color = input<ButtonColorType | undefined>(undefined);
}
