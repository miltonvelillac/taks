import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DateTimePipe } from './date-time.pipe';



@NgModule({
  declarations: [
    DateTimePipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    DatePipe
  ],
  exports: [
    DateTimePipe
  ]
})
export class DateTimeModule { }
