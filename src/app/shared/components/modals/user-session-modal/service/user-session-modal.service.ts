import { inject, Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { UserSessionModalComponent } from '../user-session-modal.component';

@Injectable({
  providedIn: 'root'
})
export class UserSessionModalService {
  private modalCtrl = inject(ModalController);

  constructor() { }

  async open(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: UserSessionModalComponent,
    });
    modal.present();
  }
}
