import { ChangeDetectionStrategy, Component, inject, input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '@shared/components/input/input.component';
import { InputType } from '@shared/types/input.type';
import { ChipComponent } from '../chip/chip.component';

@Component({
  selector: 'app-email-chips',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ChipComponent,
    InputComponent,
  ],
  templateUrl: './email-chips.component.html',
  styleUrl: './email-chips.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailChipsComponent implements OnChanges {
  formField = input.required<FormControl>();
  id = input('');
  name = input('');
  label = input('');
  placeholder = input('');
  addOnBlur = input(true);
  chipGridArialLabel = input('');
  cancelBtnArialLabel = input('');
  removeIcon = input('cancel');
  listOfValues = input<string[]>([]);
  inputType = input<InputType>('text');

  reactiveKeywords = signal<string[]>([]);

  fb = inject(FormBuilder);
  inputField = this.fb.control('', [ Validators.email ]);

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.setInitKeywords();
  }

  removeReactiveKeyword(keyword: string) {
    this.reactiveKeywords.update(keywords => {
      const index = keywords.indexOf(keyword);
      if (index < 0) {
        return keywords;
      }

      keywords.splice(index, 1);
      return [...keywords];
    });
  }

  addReactiveKeyword(): void {
    if(!this.inputField.valid) return;
    const value = (this.inputField.value || '').trim();
    if (!value) return;
    this.reactiveKeywords.update(keywords => [...keywords, value]);
    this.setValues();
    this.inputField.setValue('');
  }

  private setInitKeywords(): void {
    this.reactiveKeywords.set(this.listOfValues());
  }

  private setValues(): void {
    const listValues = this.reactiveKeywords() ? [...this.reactiveKeywords()] : [];
    this.formField().setValue(listValues);
  }
}
