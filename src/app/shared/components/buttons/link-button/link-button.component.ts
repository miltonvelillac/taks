import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-link-button',
  imports: [
    MatButtonModule
  ],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkButtonComponent {
  id = input('');
  label = input('');
  disabled = input(false);
}
