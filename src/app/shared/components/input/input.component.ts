import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { IonInput, IonInputPasswordToggle, IonItem } from '@ionic/angular/standalone';
import { InputAutoCompleteType } from '@shared/types/input-auto-complete.type';
import { InputType } from '@shared/types/input.type';

@Component({
  selector: 'app-input',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    IonInput,
    IonInputPasswordToggle,
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
  readonly = input(false);
  fill = input('outline');
  labelPlacement = input('floating');
  autocomplete = input<InputAutoCompleteType>('on');

  blur = output<void>();
  enter = output<void>();

  clear(): void {
    this.formField().setValue('');
  }

  showClearBtn(): boolean {
    return this.showClear() && !!this.formField().value;
  }

  blurEvent(): void {
    this.blur.emit();
  }

  enterEvent(): void {
    this.enter.emit();
  }
}
