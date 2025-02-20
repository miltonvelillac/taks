import { ChangeDetectionStrategy, Component, input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  selector: 'app-chip-grid',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    IconComponent,
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
  
  reactiveKeywords = signal<string[]>([]);

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

  addReactiveKeyword(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.reactiveKeywords.update(keywords => [...keywords, value]);
    }
    event.chipInput!.clear();
  }

  private setInitKeywords(): void {
    this.reactiveKeywords.set(this.listOfValues());
  }
}
