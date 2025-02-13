import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { TitlePipe } from './title.pipe';



@NgModule({
  declarations: [
    TitlePipe,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TitleCasePipe
  ],
  exports: [
    TitlePipe
  ]
})
export class TitlePipeModule { }
