import { AfterViewInit, ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/angular/standalone';

@Component({
  selector: 'app-date',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IonDatetime,
    IonDatetimeButton,
    IonModal,
  ],
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateComponent implements AfterViewInit {
  formField = input.required<FormControl>();
  id = input('datetime');

  ngAfterViewInit(): void {
    this.formField().updateValueAndValidity();
  }

  get selectedDateValue() {
    return this.formField()?.value;
  }
}
