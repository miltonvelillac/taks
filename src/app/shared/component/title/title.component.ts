import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TitlePipeModule } from '@shared/pipes/title/title.pipe.module';
import { titleType } from '@shared/types/title.type';

@Component({
  selector: 'app-title',
  imports: [TitlePipeModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent {
  title = input('');
  titleType = input<titleType>('h1');
  
}
