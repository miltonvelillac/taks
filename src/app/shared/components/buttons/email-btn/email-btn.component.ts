import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { EmailSvgComponent } from '@shared/components/svgs/email-svg/email-svg.component';

@Component({
  selector: 'app-email-btn',
  imports: [
    MatButtonModule,
    EmailSvgComponent
  ],
  templateUrl: './email-btn.component.html',
  styleUrl: './email-btn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailBtnComponent {
  id = input('');
  label = input('');
  disabled = input(false);
}
