import { Component, input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonRadio, IonRadioGroup } from '@ionic/angular/standalone';
import { RadioBtnOptionsModel } from '@shared/models/radio-btn-options.model';

@Component({
  selector: 'app-radio-btn',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IonRadio,
    IonRadioGroup,
  ],
  templateUrl: './radio-btn.component.html',
  styleUrl: './radio-btn.component.scss'
})
export class RadioBtnComponent {
  id = input<string>('');
  formField = input.required<FormControl>();
  options = input<RadioBtnOptionsModel[]>([]);
  arialLabel = input<string>('');
}
