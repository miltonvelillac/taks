import { TextFieldModule } from '@angular/cdk/text-field';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-text-area',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
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
}
