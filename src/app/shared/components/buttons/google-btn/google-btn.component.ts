import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { GoogleSvgComponent } from '@shared/components/svgs/google-svg/google-svg.component';

@Component({
  selector: 'app-google-btn',
  imports: [
    MatButtonModule,
    GoogleSvgComponent
  ],
  templateUrl: './google-btn.component.html',
  styleUrl: './google-btn.component.scss'
})
export class GoogleBtnComponent {
  id = input('');
  label = input('');
  disabled = input(false);
}
