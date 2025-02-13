import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { InputType } from '@shared/types/input.type';
import { IconButtonComponent } from '../buttons/icon-button/icon-button.component';

@Component({
  selector: 'app-input',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    IconButtonComponent,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  formField = input.required<FormControl>();
  type = input<InputType>('text');
  id = input('');
  name = input('');
  placeholder = input('');
  label = input('');
  showClear = input(false);
  disabled = input(false);
  readonly = input(false);

  clear(): void {
    this.formField().setValue('');
  }

  showClearBtn(): boolean {
    return this.showClear() && !!this.formField().value;
  }
}
