import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-text',
  imports: [],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextComponent {

}
