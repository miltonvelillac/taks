import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonTextarea } from '@ionic/angular/standalone';

@Component({
  selector: 'app-text-area',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IonTextarea,
  ],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextAreaComponent {
  formField = input.required<FormControl>();
  id = input('');
  name = input('');
  label = input('');
  minRows = input(1);
  maxRow = input(5);
  autoSize = input(true);
  maxlength = input<number | string | null>(null);
}
