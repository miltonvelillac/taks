import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { IonLoading } from '@ionic/angular/standalone';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonLoading
  ]
})
export class LoadingComponent  implements OnInit {
  show = input(false);
  message = input('');
  duration = input(null);

  constructor() { }

  ngOnInit() {}

}
