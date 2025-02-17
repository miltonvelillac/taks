import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-date',
  imports: [
    MatDatepickerModule
  ],
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateComponent {
  
}
