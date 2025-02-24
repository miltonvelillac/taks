import { ChangeDetectionStrategy, Component, inject, input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '@shared/components/input/input.component';
import { ChipComponent } from '../chip/chip.component';
import { InputType } from '@shared/types/input.type';

@Component({
  selector: 'app-chip-grid',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ChipComponent,
    InputComponent,
  ],
  templateUrl: './chip-grid.component.html',
  styleUrl: './chip-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipGridComponent implements OnChanges {
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
  inputField = this.fb.control('');

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
    const value = (this.inputField.value || '').trim();
    if (!value) return;
    this.reactiveKeywords.update(keywords => [...keywords, value]);
    this.inputField.setValue('');
  }

  private setInitKeywords(): void {
    this.reactiveKeywords.set(this.listOfValues());
  }
}
