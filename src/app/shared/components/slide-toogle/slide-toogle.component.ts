import { Component, input } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SlideTooglePositionType } from '@shared/types/slide-toogle-position.type';

@Component({
  selector: 'app-slide-toogle',
  imports: [MatSlideToggleModule],
  templateUrl: './slide-toogle.component.html',
  styleUrl: './slide-toogle.component.scss'
})
export class SlideToogleComponent {
  id = input<string>('');
  label = input<string>('');
  labelPosition = input<SlideTooglePositionType>('after');
}
