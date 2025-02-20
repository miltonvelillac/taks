import { ChangeDetectionStrategy, Component, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';
import { ButtonComponent } from '@shared/components/buttons/button/button.component';
import { RoutesUtils } from '@shared/utils/routes/routes.utils';
import { UserSessionStoreHandlerService } from '@store/user/handler/user-session-store-handler.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    ButtonComponent,
  ]
})
export class ModalComponent {
  private router = inject(Router);
  private userSessionStoreHandlerService = inject(UserSessionStoreHandlerService);

  constructor(private modalCtrl: ModalController) { }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  async signOut(): Promise<void> {
    try {
      await this.userSessionStoreHandlerService.signOut();
      this.modalCtrl.dismiss(null, 'cancel');
      this.router.navigate([`/${RoutesUtils.login}`]);
    } catch (error) {
      console.error(error);
    }
  }

}
